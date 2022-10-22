import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Shops from "./components/Shops";

function App() {
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
    </div>
  );
}

export default App;
