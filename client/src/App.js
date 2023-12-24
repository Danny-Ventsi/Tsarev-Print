import NavBar from "./Components/Navigation/Navbar";
import { useState } from "react";
import { useBetween } from "use-between";

export const useSharableState = () => {
  const [bagItems, setBagItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [numOfItemsInBag, setNumOfItemsInBag] = useState("");
  const [reload, setReload] = useState(0);
  return {
    price,
    setPrice,
    numOfItemsInBag,
    setNumOfItemsInBag,
    setBagItems,
    bagItems,
    reload,
    setReload,
  };
};

const App = () => {
  const {
    reload,
    setReload,
    setBagItems,
    bagItems,
    price,
    setPrice,
    setNumOfItemsInBag,
    numOfItemsInBag,
  } = useBetween(useSharableState);
  return (
    <div>
      <NavBar
        setNumOfItemsInBag={setNumOfItemsInBag}
        numOfItemsInBag={numOfItemsInBag}
        setPrice={setPrice}
        price={price}
        bagItems={bagItems}
      />
    </div>
  );
};

export default App;
