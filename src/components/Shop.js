import "./Shop.css";
import Card from "./Card";
import Loading from "./Loading";
import React, { useState, useEffect } from "react";
export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const items = await data.json();
    setItems(items);
  };

  const cards = items.map((item) => <Card item={item} />);

  return (
    <div className="items-grid">{items.length < 1 ? <Loading /> : cards}</div>
  );
}
