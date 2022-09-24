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

  function addToShoppingCart(item) {
    setShoppingCart((prevArray) => [...prevArray, item]);
  }

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
