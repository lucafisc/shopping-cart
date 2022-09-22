import { useEffect, useState } from "react";
import "./Card.css";
var imageExists = require("image-exists");

export default function Card(props) {
  const [err, setErr] = useState(false);
  const { item } = props;
  const { name, price, image_link, product_colors, id } = item;
  let card;
  useEffect(() => {
    imageExists(image_link, function (exists) {
      if (exists) {
        setErr(false);
      } else {
        setErr(true);
      }
    });
  }, []);

  return (
    <>
      {err === false && (
        <div className="card">
          <div className="img-wrapper">
            <img src={image_link} />
          </div>
          <h4>{name}</h4>
          <h3>{price}</h3>
        </div>
      )}
    </>
  );
}
