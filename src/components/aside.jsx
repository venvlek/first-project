import "../CSS Files/Aside.css";
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faBell,
  faCommentDots,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  return (
    <aside className="aside">
      <button className="aside-btn logo-btn">
        <img src={logo} alt="Pinterest Logo" className="logo" height="30" />
      </button>
      
      <button className="aside-btn">
        <FontAwesomeIcon icon={faHouse} />
      </button>

      <button className="aside-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <button className="aside-btn">
        <FontAwesomeIcon icon={faBell} />
      </button>

      <button className="aside-btn">
        <FontAwesomeIcon icon={faCommentDots} />
      </button>

      <div className="aside-bottom">
        <button className="aside-btn">
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
    </aside>
  );
}