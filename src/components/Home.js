import "./Home.css";
import brands from "../images/brands.svg";
import cover from "../images/curology-VItxz6u036U-unsplash.jpg";
export default function Home() {
  return (
    <div className="home">
      <div className="slogan">
        <h1 className="fade-in">shop products</h1>
        <h1 className="fade-in">
          from <span className="creators">creators</span>
        </h1>
        <h1 className="fade-in">
          and <span className="brands">brands</span>
        </h1>
        <img src={brands} className="yellow-svg" />
      </div>
      <img src={cover} className="cover" />
      <div className="shop-now">
        <h1>
          shop now <span className="arrows">{">>>"}</span>
        </h1>
      </div>
    </div>
  );
}
