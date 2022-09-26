import "./ShoppingCart.css";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function ShoppingCart(props) {
  const { shoppingCart, toggleCart } = props;

  const itemList = shoppingCart.map((item) => <ListItem item={item} />);

  return (
    <div className="list-menu">
      <div className="triangle"></div>
      <button className="list-button list-close" onClick={toggleCart}>
        x
      </button>
      <div className="shopping-cart-container">{itemList}</div>
    </div>
  );
}
