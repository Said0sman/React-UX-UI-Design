import "./UpperMain.css";
import laptop from "../utils/api/global/images/laptop.svg";

export default function UpperMain() {
  return (
    <div className="upper-main-grid-container">
      <div className="item-a">
        <span className="upper-main-header-white">
          Vi utbildar Sverige inom
        </span>
        <br />
        <span className="upper-main-header-orange">IT och programering</span>
      </div>
      <div className="item-b">
        <p className="control_labels">
          Söker du kompetena lärare till en yrkesutbildning, kodstuga eller
        </p>
        <p className="control_labels">
          gästföreläsning i Göteborg? <a className='upper-main-link-color' href="#">Hur bokar jag ett möte</a>
        </p>
      </div>

      <div className="item-d">
        <button className="primary_button">Våra kurser</button>
        <button className="upper-main-button-dark">kontakta OSS</button>
      </div>
      <div className="item-c">
        <img src={laptop} alt="laptop bild" />
      </div>
    </div>
  );
}
