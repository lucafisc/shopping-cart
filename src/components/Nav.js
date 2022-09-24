import { Link } from "react-router-dom";
import "./Nav.css";
import favoritesIcon from "../images/icons/favorite-white.png";
import shoppingIcon from "../images/icons/shopping-bag-white.png";
import { useState, useEffect } from "react";

export default function Nav(props) {
  const { shoppingCart, toggleCart } = props;
  const amount = shoppingCart.length;

  const [circleClasses, setCircleClasses] = useState("");
  useEffect(() => {
    setCircleClasses("pulsate");
    setTimeout(() => {
      setCircleClasses("");
    }, 1000);
  }, [shoppingCart]);

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav--logo">logo</div>
      </Link>
      <div className="nav--links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about" data-testid="about-page-link">
            <li>About</li>
          </Link>
        </ul>
        <Link to="/favorites">
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
