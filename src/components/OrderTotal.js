export default function OderTotal(props) {
  const { items } = props;
  let totalPrice = items.reduce(function (accumulator, item) {
    console.log(accumulator);
    return accumulator + parseInt(item.price) * item.quantity;
  }, 0);
  const shipping = totalPrice > 40 ? 0 : 5;

  function fakeStore() {
    const warning = document.querySelector(".fake-store");
    warning.classList.add("show-warning");
    setTimeout(() => {
      warning.classList.remove("show-warning");
    }, 2000);
  }

  return (
    <>
      <div className="total-container">
        <h1>Shipping:</h1>
        {shipping === 5 && <h2>free shipping for orders over € 40!</h2>}
        {shipping === 5 && <h1>€ 5</h1>}
        {shipping === 0 && (
          <h1>
            <span style={{ color: "red", textDecoration: "line-through" }}>
              € 5
            </span>{" "}
            FREE
          </h1>
        )}
      </div>
      <div className="total-container">
        <h1>Total:</h1>
        <h1>€ {totalPrice + shipping}</h1>
      </div>
      <div className="place-order">
        <button onClick={fakeStore}>Place order</button>
        <h2 className="fake-store">
          this is a fake store, you can't place orders :(
        </h2>
      </div>
    </>
  );
}
