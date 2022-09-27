import "./About.css";

export default function About() {
  return (
    <div className="about">
      <ul>
        <li>this is a fake store built using React.</li>
        <li>
          data fetched from the{" "}
          <a href="https://makeup-api.herokuapp.com/">Makeup AP</a>.
        </li>
        <li>
          fonts used are{" "}
          <a href="https://velvetyne.fr/fonts/picnic/">Picnic by Velvetyne</a>{" "}
          and{" "}
          <a href="https://fonts.google.com/specimen/Karla ">Karla by Google</a>
          .
        </li>
        <li>
          home image by{" "}
          <a href="https://unsplash.com/photos/VItxz6u036U">
            Curology on Unsplash
          </a>
          .
        </li>
      </ul>
    </div>
  );
}
