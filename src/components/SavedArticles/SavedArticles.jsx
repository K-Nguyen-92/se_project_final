import "./SavedArticles.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedArticles({ currentUser, handleCardBookmark, deleteBookmark }) {
  return (
    <div className="saved-articles">
      <div className="saved-articles__container">
        {" "}
        <p className="saved-articles__title">Saved articles</p>
        <h1 className="saved-articles__welcome">
          {currentUser.name}, you have {currentUser.articleCounts} saved
          articles
        </h1>
        <p className="saved-articles__keywords">
          By keywords: {currentUser.keyword[0]}, {currentUser.keyword[1]}{" "}
          {`${currentUser.keyword.length > 2 ? "and more" : ""}`}
        </p>
      </div>
      <ul className="saved-articles__bookmark">
        {currentUser.bookmarks.map((item) => {
          return (
            <NewsCard
              key={item.url}
              item={item}
              currentUser={currentUser}
              handleCardBookmark={handleCardBookmark}
              deleteBookmark={deleteBookmark}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default SavedArticles;
