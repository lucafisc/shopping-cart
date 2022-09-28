import "./Favorites.css";
import Card from "./Card";
import { useEffect } from "react";
export default function Favorites(props) {
  const { favorites, toggleFavorites } = props;
  const favs = favorites.map((fav) => {
    return (
      <Card
        item={fav}
        key={fav.id}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
      />
    );
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
  });

  return (
    <>
      {favorites.length > 0 && <div className="items-grid">{favs}</div>}
      {favorites.length <= 0 && <div>ll</div>}
    </>
  );
}
