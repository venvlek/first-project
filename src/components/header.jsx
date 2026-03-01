import "../CSS Files/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faChevronDown,
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">

      {/* Search */}
      <div className="header-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header-icon" />
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faMicrophone} className="header-icon microphone" />
      </div>

      {/* Icons */}
      <div className="header-icons">
        <FontAwesomeIcon icon={faBell} className="header-icon" />
        <FontAwesomeIcon icon={faCommentDots} className="header-icon" />

        {/* Profile */}
        <div className="header-profile">
          <div className="header-avatar">A</div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </header>
  );
}