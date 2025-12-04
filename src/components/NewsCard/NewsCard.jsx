import "./NewsCard.css";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewsCard({ item, isLoggedIn, handleCardBookmark }) {
  const datePublished = new Date(item.publishedAt);
  const year = datePublished.getFullYear();
  const month = datePublished.toLocaleString("default", { month: "long" });
  const date = datePublished.getDate();
  // const currentUser = useContext(CurrentUserContext);
  const [isBookmark, setisBookmark] = useState(false);
  const openUrl = () => {
    window.open(item.url);
  };
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
            <button
              type="button"
              className={
                isBookmark
                  ? "news-card__bookmark-button-marked"
                  : "news-card__bookmark-button"
              }
              onClick={() => {
                isLoggedIn &&
                  (handleCardBookmark(item.url, isBookmark),
                  setisBookmark(!isBookmark));
              }}
            ></button>
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
