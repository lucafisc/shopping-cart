import "./Card.css";

export default function Card(props) {
  const { item } = props;
  const { title, price, images, id } = item;
  console.log(title);
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={images[0]} />
      </div>
      <h4>{title}</h4>
      <h3>{price}</h3>
    </div>
  );
}
