import { Link } from "react-router-dom";
import "./Nav.css";
import favoritesIcon from "../images/icons/favorite-white.png";
import shoppingIcon from "../images/icons/shopping-bag-white.png";
import { useState, useEffect } from "react";

export default function Nav(props) {
  const { shoppingCart, toggleCart, hideCart } = props;
  const amount = shoppingCart
    .map((item) => {
      return item.quantity;
    })
    .reduce(add, 0);

  function add(accumulator, a) {
    return accumulator + a;
  }

  const [circleClasses, setCircleClasses] = useState("");
  useEffect(() => {
    setCircleClasses("pulsate");
    setTimeout(() => {
      setCircleClasses("");
    }, 1000);
  }, [shoppingCart]);

  return (
    <nav className="nav">
      <Link to="/" onClick={hideCart}>
        <div className="nav--logo">logo</div>
      </Link>
      <div className="nav--links">
        <ul>
          <Link className="home-btn" to="/" onClick={hideCart}>
            <li>Home</li>
          </Link>
          <Link to="/shop" onClick={hideCart}>
            <li>Shop</li>
          </Link>
          <Link to="/about" data-testid="about-page-link" onClick={hideCart}>
            <li>About</li>
          </Link>
        </ul>
        <Link to="/favorites" onClick={hideCart}>
          <div className="nav--favorites">
            <img src={favoritesIcon} />
          </div>
        </Link>
        <div className="nav--shopping-cart" onClick={toggleCart}>
          <img src={shoppingIcon} />
          {amount > 0 && (
            <div className={circleClasses}>
              <p>{amount}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
