import "./SavedArticles.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedArticles() {
  return (
    <div className="saved-articles">
      <div className="saved-articles__container">
        {" "}
        <p className="saved-articles__title">Saved articles</p>
        <h1 className="saved-articles__welcome">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-articles__keywords">
          By keywords: Nature, Yellowstone, and 2 other
        </p>
      </div>
      {/* <NewsCard /> */}
    </div>
  );
}
export default SavedArticles;
