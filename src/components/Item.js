import "./Item.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchItems } from "../modules/fetchItems";
import icon from "../images/icons/shopping-bag-white.png";
export default function Item(props) {
  const { addToShoppingCart } = props;
  const [item, setItem] = useState({});

  const location = useLocation();
  const { url } = location.state;
  useEffect(() => {
    fetchItems(url, setItem);
  }, []);

  return (
    <div className="item">
      <div className="item--image">
        <img src={item.api_featured_image} />
      </div>
      <div className="item--description">
        <div className="item--title-container">
          <div>
            <h1 className="item--title">{item.name}</h1>
            <h3 className="item--title">€ {item.price}</h3>
          </div>
          <button className="item--buy" onClick={() => addToShoppingCart(url)}>
            <img src={icon} />
            <p>+</p>
          </button>
        </div>
        <p className="item--text">{item.description}</p>
      </div>
    </div>
  );
}
