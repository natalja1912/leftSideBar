import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header({ changeSideBarState, isSideBarActive }) {
  let headerButtonText = isSideBarActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />;
  return (
    <header className="header">
      <div className="header__group">
        <p className="header__logo">Sidebar App</p>
        <button className="header__button" onClick={() => changeSideBarState()}>
          {headerButtonText}
        </button>
      </div>
    </header>
  );
}

export default Header;
