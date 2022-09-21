import "./Card.css";

export default function Card(props) {
  const { item } = props;
  const { name, price, image_link, product_colors, id } = item;
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={image_link} />
      </div>
      <h4>{name}</h4>
      <h3>{price}</h3>
    </div>
  );
}
