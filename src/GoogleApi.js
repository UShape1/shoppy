import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const fetchNearestPlacesFromGoogle = async (latitude, longitude, radius) => {
  const url =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    latitude +
    "," +
    longitude +
    "&radius=" +
    radius +
    "&type=supermarket" +
    "&key=" +
    GOOGLE_MAPS_API_KEY;

  const fetchResult = await fetch(url);
  const resultJson = await fetchResult.json();
  // TODO: will always return at most 20 places, use nextPageToken to get more
  return resultJson;
};

const fetchMapsDetails = async (placeId) => {
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json?fields=url%2Cname%2Cicon%2Cphotos&place_id=" +
    placeId +
    "&key=" +
    GOOGLE_MAPS_API_KEY;

  const fetchResult = await fetch(url);
  const resultJson = await fetchResult.json();
  return resultJson;
};

const fetchMapsPicture = async (detailsJson) => {
  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/photo?photo_reference=" +
      detailsJson.result.photos[0].photo_reference +
      "&maxwidth=287" +
      "&key=" +
      GOOGLE_MAPS_API_KEY;

    const fetchResult = await fetch(url);
    return fetchResult;
  } catch (err) {
    return {
      url: "https://www.timesnewroman.ro/wp-content/uploads/2022/05/elon-musk-obor-550x370.jpg",
    };
  }
};

export const GeoLocation = ({ setLocationInfo }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    setLocationInfo(
      !isGeolocationAvailable
        ? { status: "Location not available" }
        : !isGeolocationEnabled
        ? { status: "Location not enabled" }
        : coords
        ? { status: "Connected", coords }
        : { status: "Getting location" }
    );
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  return;
};

export const GoogleApi = ({ updateShops }) => {
  const [locationInfo, setLocationInfo] = useState({ status: "Unknown" });

  useEffect(() => {
    if (locationInfo.status === "Connected")
      fetchNearestPlacesFromGoogle(
        locationInfo.coords.latitude,
        locationInfo.coords.longitude,
        5000
      ).then((json) => {
        for (let shop of json.results) {
          fetchMapsDetails(shop.place_id).then((detailsJson) =>
            fetchMapsPicture(detailsJson).then((picture) => {
              updateShops({
                ...detailsJson,
                id: shop.place_id,
                result: {
                  ...detailsJson.result,
                  points: Math.floor(Math.random() * 1000 + 1),
                  photo_url: picture.url,
                },
              });
            })
          );
        }
      });
  }, [locationInfo]);

  return <GeoLocation setLocationInfo={setLocationInfo} />;
};
export default GoogleApi;
