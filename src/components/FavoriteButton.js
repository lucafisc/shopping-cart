import heart from "../images/icons/favorite.png";

export default function FavoriteButton(props) {
  const { toggleFavorites, item, isFavorite } = props;
  const classes = isFavorite ? "favorite-btn favorited" : "favorite-btn";
  return (
    <div className={classes} onClick={(e) => toggleFavorites(e, item)}>
      <img src={heart} />
    </div>
  );
}
