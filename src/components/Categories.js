import "./Categories.css";
import { APICategories } from "../data/APICategories";
import Category from "./Category";
import { useState, useEffect } from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Categories(props) {
  const { categoryChange } = props;
  const [icons, setIcons] = useState({});
  useEffect(() => {
    setIcons(
      importAll(
        require.context(
          "../images/icons/categories/",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    );
  }, []);

  const categs = APICategories.map((categ) => {
    const icon = icons[categ + ".png"];
    return (
      <Category categ={categ} icon={icon} categoryChange={categoryChange} />
    );
  });
  return (
    <>
      <h4 className="categories-title">Categories</h4>
      <div className="categories">{categs}</div>
    </>
  );
}
