import "./Item.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchItems } from "../modules/fetchItems";
import icon from "../images/icons/shopping-bag-white.png";
import ProductColor from "./ProductColor";

export default function Item(props) {
  const { addToShoppingCart } = props;
  const location = useLocation();
  const { item } = location.state;
  const {
    name,
    price,
    product_colors,
    id,
    api_featured_image,
    tag_list,
    description,
  } = item;

  const productColors = product_colors.map((color, index) => (
    <ProductColor color={color} key={color + index} />
  ));

  return (
    <div className="item">
      <div className="item--image">
        <img src={api_featured_image} />
      </div>
      <div className="item--description">
        <div className="item--title-container">
          <div>
            <h1 className="item--title">{name}</h1>
            <h3 className="item--title">€ {price}</h3>
            <div className="product-colors">{productColors}</div>
          </div>
          <button className="item--buy" onClick={() => addToShoppingCart(item)}>
            <img src={icon} />
            <p>+</p>
          </button>
        </div>
        <p className="item--text">{description}</p>
      </div>
    </div>
  );
}
