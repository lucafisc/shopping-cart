import "./Shop.css";
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

  const cards = items.map((item) => {
    return <Card />;
  });

  return <div>{cards}</div>;
}
