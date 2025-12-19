import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getNews } from "../../utils/api.js";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SavedArticles from "../SavedArticles/SavedArticles.jsx";
import { defaultUser } from "../../utils/constant.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [newsItems, setNewsItems] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [hasError, setHasError] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const closeActiveModal = () => {
    setActiveModal("");
    setErrorMessage("");
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUser(defaultUser);
    closeActiveModal();
    return console.log("Login attempted", isLoggedIn);
  };
  const handleRegistration = () => {
    return console.log("Register attempted");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };
  const handleButtonClick = (modalType) => {
    setActiveModal(modalType);
  };
  const handleQuery = (query) => {
    setIsLoading(true);
    setNotFound(false);
    setHasError(false);
    getNews(query)
      .then((data) => {
        setNewsItems(data.articles);
        setIsSearched(true);
        setIsLoading(false);
        // console.log(data.articles);
        if (data.articles.length === 0) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
        setIsLoading(false);
      });
  };
  const handleCardBookmark = (article, isBookmark) => {
    if (isBookmark) {
      const updatedBookmarks = currentUser.bookmarks.filter((item) => {
        return item.url !== article.url;
      });
      currentUser.bookmarks = updatedBookmarks;
      currentUser.articleCounts -= 1;
      console.log(currentUser.bookmarks);
    } else {
      if (!currentUser.bookmarks.includes(article)) {
        currentUser.bookmarks.push(article);
        currentUser.articleCounts += 1;
        console.log(currentUser.bookmarks);
      }
    }
  };
  const deleteBookmark = (article) => {
    const updatedBookmarks = currentUser.bookmarks.filter((item) => {
      return item.url !== article.url;
    });
    currentUser.bookmarks = updatedBookmarks;
    currentUser.articleCounts -= 1;
  };
  return (
    <div className={`page ${isHomePage && "page__home page"}`}>
      <div className="page__content">
        <Header
          handleButtonClick={handleButtonClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          isHomePage={isHomePage}
          currentUser={currentUser}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleQuery={handleQuery}
                newsItems={newsItems}
                isSearched={isSearched}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                notFound={notFound}
                handleCardBookmark={handleCardBookmark}
                hasError={hasError}
                currentUser={currentUser}
                handleButtonClick={handleButtonClick}
              />
            }
          ></Route>
          <Route
            path="/saved-articles"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedArticles
                  currentUser={currentUser}
                  handleCardBookmark={handleCardBookmark}
                  deleteBookmark={deleteBookmark}
                />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseButton={closeActiveModal}
        handleLogin={handleLogin}
        isLoading={isLoading}
        onAltButtonClick={() => handleButtonClick("sign-up")}
        errorMessage={errorMessage}
      />
      <RegisterModal
        isOpen={activeModal === "sign-up"}
        handleCloseButton={closeActiveModal}
        handleRegistration={handleRegistration}
        isLoading={isLoading}
        onAltButtonClick={() => handleButtonClick("login")}
      />
    </div>
  );
}

export default App;
