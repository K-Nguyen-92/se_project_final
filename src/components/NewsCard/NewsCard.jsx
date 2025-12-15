import "./NewsCard.css";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewsCard({
  item,
  isLoggedIn,
  handleCardBookmark,
  currentUser,
  deleteBookmark,
  handleButtonClick,
}) {
  const datePublished = new Date(item.publishedAt);
  const year = datePublished.getFullYear();
  const month = datePublished.toLocaleString("default", { month: "long" });
  const date = datePublished.getDate();
  const [isBookmark, setisBookmark] = useState(false);
  const openUrl = () => {
    window.open(item.url);
  };
  const homePage = window.location.pathname === "/";
  const savedArticlesPage = window.location.pathname === "/saved-articles";
  return (
    <li className="news-card">
      <div className="news-card__container">
        <div className="news-card__card">
          <img
            src={item.urlToImage}
            alt="News"
            className="news-card__image"
            onClick={openUrl}
          />
          {/* <p className="news-card__keyword">Nature</p> */}
          <div className="news-card__bookmark-container">
            {homePage && (
              <button
                type="button"
                className={
                  isBookmark ||
                  (isLoggedIn && currentUser.bookmarks.includes(item))
                    ? "news-card__bookmark-button-marked"
                    : "news-card__bookmark-button"
                }
                onClick={() => {
                  isLoggedIn
                    ? (handleCardBookmark(item, isBookmark),
                      setisBookmark(!isBookmark))
                    : handleButtonClick("sign-up");
                }}
              ></button>
            )}
            {savedArticlesPage && (
              <button
                type="button"
                className={"news-card__trash-button"}
                onClick={() => {
                  deleteBookmark(item);
                }}
              ></button>
            )}
            {!isLoggedIn && (
              <p className="news-card__bookmark-notice">
                Sign in to save articles
              </p>
            )}
          </div>
          <div className="news-card__content">
            <p className="news-card__date">
              {month} {date}, {year}
            </p>
            <h1 className="news-card__title">{item.title}</h1>
            <p className="news-card__description">{item.description}</p>
            <p className="news-card__source">{item.author}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
export default NewsCard;
