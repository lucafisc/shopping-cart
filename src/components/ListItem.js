export default function ListItem(props) {
  const { item, addItem, subtractItem, changeItem } = props;
  const { name, quantity, price, api_featured_image } = item;
  return (
    <>
      <div className="list-item">
        <img src={api_featured_image} />
        <div className="list-item--text">
          <h1>{name}</h1>
          <div className="list-item--quantity">
            <button className="list-button" onClick={() => subtractItem(item)}>
              -
            </button>
            <input
              value={quantity}
              type="phone"
              onClick={(e) => e.target.select()}
              onChange={(e) => changeItem(e.target.value, item)}
            ></input>
            <button className="list-button" onClick={() => addItem(item)}>
              +
            </button>
          </div>
        </div>
        <h1 className="item--title list-item--price">€ {price * quantity}</h1>
      </div>
      <hr />
    </>
  );
}
