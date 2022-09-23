export default function Category(props) {
  const { categ, icon, categoryChange, category } = props;
  const title = categ.replace("_", " ");
  const classes =
    category === categ ? "category category--current" : "category";
  return (
    <div className={classes} onClick={() => categoryChange(categ)}>
      <img src={icon} />
      <h4>{title}</h4>
    </div>
  );
}
