import "./Header.css";
import logOutIconHomePage from "../../assets/logout-icon-home-page.svg";
import logOutIcon from "../../assets/logout-icon.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Header({
  handleButtonClick,
  isLoggedIn,
  handleLogout,
  isHomePage,
  currentUser,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={`${isMenuOpen && "active"} header`}>
      <h1
        className={
          isHomePage || isMenuOpen
            ? "header__home-page header__title header__title-menu"
            : "header__title"
        }
      >
        NewsExplorer
      </h1>
      <div
        className={`${
          isMenuOpen && "active"
        } header__buttons header__home-page`}
      >
        {
          <Link to={"/"} className="header__link">
            <button
              className={
                isHomePage
                  ? "header__button-home-page header__button-home"
                  : "header__button-home"
              }
            >
              Home
            </button>
          </Link>
        }
        {isLoggedIn && (
          <Link to={"/saved-articles"} className="header__link">
            <button
              className={
                isHomePage
                  ? "header__articles-home-page header__button-articles"
                  : "header__button-articles"
              }
            >
              Saved articles
            </button>
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className={
              isHomePage
                ? "header__button-user-home-page header__button-user"
                : "header__button-user"
            }
            onClick={handleLogout}
          >
            {currentUser.name}
            <img
              className="header__button-logout-icon"
              src={isHomePage || isMenuOpen ? logOutIconHomePage : logOutIcon}
              alt="Logout Icon"
            />
          </button>
        ) : (
          <button
            className="header__button-login"
            type="button"
            onClick={() => {
              handleButtonClick("login");
            }}
          >
            Sign In
          </button>
        )}
      </div>
      <div
        className={
          isHomePage
            ? `${isMenuOpen && "active"} header__hamburger-menu`
            : `${
                isMenuOpen && "active"
              } header__hamburger-menu header__hamburger-menu-dark`
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="header__hamburger-item"></span>
        <span className="header__hamburger-item"></span>
      </div>
    </header>
  );
}

export default Header;
