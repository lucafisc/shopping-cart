import React, { useState, useEffect } from "react";
import "./Shop.css";
import Card from "./Card";
import Loading from "./Loading";
import Categories from "./Categories";
export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("blush");
  useEffect(() => {
    fetchItems(category, setItems);
  }, [category]);

  function categoryChange(categ) {
    setItems([]);
    setCategory(categ);
  }

  const cards = items.map((item) => <Card item={item} />);

  return (
    <>
      <Categories categoryChange={categoryChange} />
      <div className="items-grid">{items.length < 1 ? <Loading /> : cards}</div>
    </>
  );
}

const fetchItems = async (category, setItems) => {
  const data = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
  );
  const items = await data.json();
  setItems(items);
  console.log(items);
};
