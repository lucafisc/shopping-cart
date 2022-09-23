import "./Loading.css";

export default function Loading() {
  return (
    <div className="card card-loading">
      <div className="img-wrapper loading"></div>
      <div className="loading loading-bar"></div>
      <div className="loading loading-bar price"></div>
    </div>
  );
}
