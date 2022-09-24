export default function ListItem(props) {
  const { item } = props;
  const { name, quantity, price, api_featured_image } = item;
  console.log(item);
  return (
    <>
      <div className="list-item">
        <img src={api_featured_image} />
        <div className="list-item--text">
          <h1>{name}</h1>
          <h1>{quantity}</h1>
        </div>
        <h1 className="item--title list-item--price">€ {price * quantity}</h1>
      </div>
      <hr />
    </>
  );
}
