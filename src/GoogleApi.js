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
    "&key=" +
    GOOGLE_MAPS_API_KEY;

  const fetchResult = await fetch(url);
  const resultJson = await fetchResult.json();
  // TODO: will always return at most 20 places, use nextPageToken to get more
  return resultJson;
};

export const fetchMapsUrl = async (placeId) => {
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json?fields=url&place_id=" +
    placeId +
    "&key=" +
    GOOGLE_MAPS_API_KEY;
  const fetchResult = await fetch(url);
  const resultJson = await fetchResult.json();
  return (
    <a
      href={resultJson.result.url}
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  );
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

export const GoogleApi = ({ setApiResponse }) => {
  const [locationInfo, setLocationInfo] = useState({ status: "Unknown" });
  const [ceva, setCeva] = useState({ ceva: "ceva" });

  useEffect(() => {
    if (locationInfo.status === "Connected")
      fetchNearestPlacesFromGoogle(
        locationInfo.coords.latitude,
        locationInfo.coords.longitude,
        50000
      ).then((json) => setApiResponse(json));
    setCeva("altceva");
  }, [locationInfo]);

  return <GeoLocation setLocationInfo={setLocationInfo} />;
};
export default GoogleApi;
