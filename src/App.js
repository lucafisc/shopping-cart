import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Favorites from "./components/Favorites";
import Item from "./components/Item";
import ShoppingCart from "./components/ShoppingCart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  function addToShoppingCart(newItem) {
    setShoppingCart((prevArray) => {
      let array = prevArray.map((item) => {
        if (item.id === newItem.id) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });

      if (!array.some((e) => e.id === newItem.id)) {
        array.push({ ...newItem, quantity: 1 });
      }
      return array;
    });
  }

  // function addItem(changedItem) {
  //   let array = [];
  //   items.map((item) => {
  //     if (item.id === changedItem.id) {
  //       const x = item.quantity + 1;
  //       array.push({ ...item, quantity: x });
  //     } else {
  //       array.push({ ...item });
  //     }
  //   });
  //   setItems(array);
  // }

  // function subtrackItem(changedItem) {
  //   let array = [];
  //   items.map((item) => {
  //     if (item.id === changedItem.id) {
  //       const x = item.quantity - 1;
  //       if (x > 0) array.push({ ...item, quantity: x });
  //     } else {
  //       array.push({ ...item });
  //     }
  //   });
  //   setItems(array);
  // }

  function toggleCart() {
    setShowCart((prevValue) => !prevValue);
  }

  return (
    <Router>
      <div className="App">
        <Nav shoppingCart={shoppingCart} toggleCart={toggleCart} />
        {showCart && (
          <ShoppingCart shoppingCart={shoppingCart} toggleCart={toggleCart} />
        )}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/shop/:id"
            element={<Item addToShoppingCart={addToShoppingCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
