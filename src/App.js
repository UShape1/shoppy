import SearchBar from "./components/SearchBar";
import { useState, useCallback } from "react";
import Shops from "./components/Shops";
import { GoogleApi } from "./GoogleApi.js";

function App() {
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("Shops");

  const updateShops = useCallback(
    (newShop) => {
      setShops((previousShops) => [...previousShops, newShop]);
    },
    [setShops]
  );

  return (
    <div className="App">
      <SearchBar setKeyword={setKeyword} />

      <Shops shops={shops} />
      <GoogleApi updateShops={updateShops} />
    </div>
  );
}

export default App;
