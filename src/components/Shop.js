import "./Shop.css";
import Card from "./Card";
import Loading from "./Loading";
import React, { useState, useEffect } from "react";
export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("lipstick");
  useEffect(() => {
    fetchItems();
  }, [category]);

  const fetchItems = async () => {
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
    );
    const items = await data.json();
    setItems(items);
    console.log(items);
  };

  const cards = items.map((item) => <Card item={item} />);

  return (
    <div className="items-grid">{items.length < 1 ? <Loading /> : cards}</div>
  );
}
