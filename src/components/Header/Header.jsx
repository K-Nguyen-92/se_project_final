import "./Header.css";
import logOutIconHomePage from "../../assets/logout-icon-home-page.svg";
import logOutIcon from "../../assets/logout-icon.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header({ handleButtonClick, isLoggedIn, handleLogout, isHomePage }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <h1
        className={
          isHomePage ? "header__home-page header__title" : "header__title"
        }
      >
        NewsExplorer
      </h1>
      <div className="header__buttons header__home-page">
        {
          <Link to={"/"} className="header__link">
            <a
              className={
                isHomePage
                  ? "header__home-page header__button-home"
                  : "header__button-home"
              }
            >
              Home
            </a>
          </Link>
        }
        {isLoggedIn && (
          <Link to={"/saved-articles"} className="header__link">
            <a
              className={
                isHomePage
                  ? "header__articles-home-page header__button-articles"
                  : "header__button-articles"
              }
            >
              Saved articles
            </a>
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className={
              isHomePage
                ? "header__button-user-home-page header__button-user"
                : "header__button-user"
            }
          >
            Elise
            <img
              className="header__button-logout-icon"
              src={isHomePage ? logOutIconHomePage : logOutIcon}
              alt="Logout Icon"
              onClick={handleLogout}
            />
          </button>
        ) : (
          <button
            className="header__button-login"
            type="button"
            onClick={() => handleButtonClick("login")}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
