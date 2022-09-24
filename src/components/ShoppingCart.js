import "./ShoppingCart.css";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function ShoppingCart(props) {
  const { shoppingCart, toggleCart } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    let array = [];
    shoppingCart.map((item) => {
      if (array.find((e) => e.id === item.id)) {
        const i = array.findIndex((e) => e.id === item.id);
        array[i].quantity += 1;
      } else {
        array.push({ ...item, quantity: 1 });
      }
    });
    setItems(array);
  }, [shoppingCart]);

  const itemList = items.map((item) => <ListItem item={item} />);

  return (
    <div className="list-menu">
      <div className="triangle"></div>
      <button className="list-close" onClick={toggleCart}>
        x
      </button>
      <div className="shopping-cart-container">{itemList}</div>
    </div>
  );
}
