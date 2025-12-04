import "./Main.css";
import About from "../About/About.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import notFoundIcon from "../../assets/not-found.png";
import { useState } from "react";

function Main({
  handleQuery,
  newsItems,
  isSearched,
  isLoggedIn,
  isLoading,
  notFound,
  handleCardBookmark,
  hasError,
}) {
  const [visibleCards, setVisibleCards] = useState(3);
  const isEmpty = visibleCards >= 100;
  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };
  return (
    <main className="main">
      <SearchForm handleQuery={handleQuery} />
      {isLoading && <Preloader />}
      {isSearched && !notFound && (
        <h1 className="main__search-results">Search results</h1>
      )}
      <ul className="main__search-articles">
        {newsItems.slice(0, visibleCards).map((item) => {
          return (
            <NewsCard
              key={item.url}
              item={item}
              isLoggedIn={isLoggedIn}
              handleCardBookmark={handleCardBookmark}
            />
          );
        })}
      </ul>
      {!isEmpty && isSearched && !notFound && (
        <div className="main__button-container">
          <button className="main__button" onClick={handleShowMore}>
            SHOW MORE
          </button>
        </div>
      )}
      {notFound && (
        <div className="main__not-found-container">
          <img src={notFoundIcon} alt="" className="main__not-found-icon" />
          <h1 className="main__not-found-title">Nothing found</h1>
          <p className="main__not-found-text">
            Sorry, but nothing matched <br /> your search terms.
          </p>
        </div>
      )}
      {hasError && (
        <div className="main__error">
          <p className="main__error-text">
            Sorry, something went wrong during the request. <br />
            Please try again later.
          </p>
        </div>
      )}

      <About />
    </main>
  );
}

export default Main;
