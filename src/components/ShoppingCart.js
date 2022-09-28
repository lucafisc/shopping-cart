import "./ShoppingCart.css";
import ListItem from "./ListItem";
import OderTotal from "./OrderTotal";
export default function ShoppingCart(props) {
  const { shoppingCart, toggleCart, addItem, subtractItem, changeItem } = props;

  const itemList = shoppingCart.map((item) => (
    <ListItem
      item={item}
      addItem={addItem}
      subtractItem={subtractItem}
      changeItem={changeItem}
      key={item.id}
    />
  ));

  return (
    <div className="list-menu">
      <div className="triangle"></div>
      <button className="list-button list-close" onClick={toggleCart}>
        x
      </button>
      {shoppingCart.length > 0 && (
        <>
          <div className="shopping-cart-container">{itemList}</div>
          <OderTotal items={shoppingCart} />
        </>
      )}
      {shoppingCart.length <= 0 && (
        <h1 className="empty-cart">nothing here yet!</h1>
      )}
    </div>
  );
}
