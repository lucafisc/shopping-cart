export default function Category(props) {
  const { categ, icon, categoryChange } = props;
  return (
    <div className="category" onClick={() => categoryChange(categ)}>
      <img src={icon} />
      <h4>{categ}</h4>
    </div>
  );
}
