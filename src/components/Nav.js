import { Link } from "react-router-dom";
import "./Nav.css";
import favoritesIcon from "../images/icons/favorite-white.png";
import shoppingIcon from "../images/icons/shopping-bag-white.png";
export default function Nav() {
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
        <div className="nav--shopping-cart">
          <img src={shoppingIcon} />
        </div>
      </div>
    </nav>
  );
}