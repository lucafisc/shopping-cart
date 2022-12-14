import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import ProductColor from "./ProductColor";
import FavoriteButton from "./FavoriteButton";
var imageExists = require("image-exists");

export default function Card(props) {
  const [err, setErr] = useState(false);
  const { item, favorites, toggleFavorites } = props;
  const { name, price, product_colors, id, api_featured_image, tag_list } =
    item;
  useEffect(() => {
    imageExists(api_featured_image, function (exists) {
      if (exists) {
        setErr(false);
      } else {
        setErr(true);
      }

      if (price <= 0) {
        setErr(true);
      }
    });
  }, []);

  const productColors = product_colors.map((color, index) => (
    <ProductColor color={color} key={color + index} />
  ));

  const organic = tag_list.includes("Organic");
  const vegan = tag_list.includes("Vegan");
  const natural = tag_list.includes("Natural");
  const isFavorite = favorites.some((e) => e.id === id);

  return (
    <>
      {err === false && (
        <Link to={`/shop/${id}`} state={{ item: item }}>
          <div className="card hidden">
            <div className="img-wrapper">
              <img src={api_featured_image} />
              {vegan && <h3 className="vegan">Vegan</h3>}
              <FavoriteButton
                toggleFavorites={toggleFavorites}
                item={item}
                isFavorite={isFavorite}
              />
            </div>
            <h4>{name}</h4>
            <h4>€ {price}</h4>
            {organic && <h4 style={{ color: "#78b379" }}>Organic</h4>}
            {natural && <h4 style={{ color: "#5957e0" }}>Natural</h4>}
            <div className="product-colors">{productColors}</div>
          </div>
        </Link>
      )}
    </>
  );
}
