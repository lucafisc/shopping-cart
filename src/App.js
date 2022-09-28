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
  const [width, setWidth] = useState(window.innerWidth);
  const [lockScroll, setLockScroll] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (width < 600 && showCart) {
      setLockScroll(true);
    } else {
      setLockScroll(false);
    }
  }, [width, showCart]);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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

  function addItem(changedItem) {
    setShoppingCart((prevArray) => {
      let array = [];
      prevArray.map((item) => {
        if (item.id === changedItem.id) {
          const x = item.quantity + 1;
          array.push({ ...item, quantity: x });
        } else {
          array.push({ ...item });
        }
      });
      return array;
    });
  }

  function subtractItem(changedItem) {
    setShoppingCart((prevArray) => {
      let array = [];
      prevArray.map((item) => {
        if (item.id === changedItem.id) {
          const x = item.quantity - 1;
          if (x > 0) array.push({ ...item, quantity: x });
        } else {
          array.push({ ...item });
        }
      });
      return array;
    });
  }

  function changeItem(value, changedItem) {
    setShoppingCart((prevArray) => {
      let array = [];
      prevArray.map((item) => {
        if (item.id === changedItem.id) {
          if (value > 0) array.push({ ...item, quantity: value });
        } else {
          array.push({ ...item });
        }
      });
      return array;
    });
  }

  function toggleCart() {
    setShowCart((prevValue) => !prevValue);
  }

  function hideCart() {
    setShowCart(false);
  }

  function toggleFavorites(e, item) {
    e.preventDefault();
    setFavorites((prevArray) => {
      if (prevArray.some((e) => e.id === item.id)) {
        return prevArray.filter((e) => e.id !== item.id);
      } else {
        return [...prevArray, item];
      }
    });
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav
          shoppingCart={shoppingCart}
          toggleCart={toggleCart}
          hideCart={hideCart}
        />
        {showCart && (
          <ShoppingCart
            shoppingCart={shoppingCart}
            toggleCart={toggleCart}
            subtractItem={subtractItem}
            addItem={addItem}
            changeItem={changeItem}
          />
        )}
        {!lockScroll && (
          <Routes>
            <Route path="/" exact element={<Home hideCart={hideCart} />} />
            <Route
              path="/shop"
              element={
                <Shop favorites={favorites} toggleFavorites={toggleFavorites} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  toggleFavorites={toggleFavorites}
                />
              }
            />
            <Route
              path="/shop/:id"
              element={<Item addToShoppingCart={addToShoppingCart} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
