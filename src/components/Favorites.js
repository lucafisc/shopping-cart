import "./Favorites.css";

export default function Favorites(props) {
  const { favorites } = props;
  const favs = favorites.map((fav) => <h1>{fav.id}</h1>);
  return <div>{favs}</div>;
}
