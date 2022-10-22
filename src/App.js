import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Shops from "./components/Shops";
import { GoogleApi, fetchMapsUrl } from "./GoogleApi.js";

function App() {
  const [apiResponse, setApiResponse] = useState({ hello: "world" });
  const [shops, setShops] = useState([
    {
      id: 1,
      name: "MegaImage",
    },
    {
      id: 2,
      name: "Profi",
    },
    {
      id: 3,
      name: "Jerrys",
    },
    {
      id: 4,
      name: "Auchan",
    },
    {
      id: 5,
      name: "Penny",
    },
    {
      id: 6,
      name: "Lidl",
    },
  ]);

  return (
    <div className="App">
      <SearchBar />

      <Shops shops={shops} />
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      <GoogleApi setApiResponse={setApiResponse} />
    </div>
  );
}

export default App;
