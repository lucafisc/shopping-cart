export default function Category(props) {
  const { categ, icon, categoryChange } = props;
  const title = categ.replace("_", " ");
  return (
    <div className="category" onClick={() => categoryChange(categ)}>
      <img src={icon} />
      <h4>{title}</h4>
    </div>
  );
}
