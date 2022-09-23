import React, { useState, useEffect } from "react";
import "./Shop.css";
import Card from "./Card";
import Loading from "./Loading";
import Categories from "./Categories";
import { fetchItems } from "../modules/fetchItems";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("category")) || "blush"
  );
  useEffect(() => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`;
    fetchItems(url, setItems);
  }, [category]);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);

  function categoryChange(categ) {
    setItems([]);
    setCategory(categ);
  }

  const cards = items.map((item) => <Card item={item} />);

  return (
    <>
      <Categories category={category} categoryChange={categoryChange} />

      {items.length < 1 ? (
        <div className="loading-container">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <div className="items-grid">{cards}</div>
      )}
    </>
  );
}
