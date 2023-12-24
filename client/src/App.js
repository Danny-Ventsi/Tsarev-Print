import NavBar from "./Components/Navigation/Navbar";
import { useState } from "react";
import { useBetween } from "use-between";

export const useSharableState = () => {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState("");
  const [reload, setReload] = useState(0);
  return {
    price,
    setPrice,
    numOfItemsInCart,
    setNumOfItemsInCart,
    setCartItems,
    cartItems,
    reload,
    setReload,
  };
};

const App = () => {
  const {
    reload,
    setReload,
    setCartItems,
    cartItems,
    price,
    setPrice,
    setNumOfItemsInCart,
    numOfItemsInCart,
  } = useBetween(useSharableState);
  return (
    <div>
      <NavBar
        setNumOfItemsInCart={setNumOfItemsInCart}
        numOfItemsInCart={numOfItemsInCart}
        setPrice={setPrice}
        price={price}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;
