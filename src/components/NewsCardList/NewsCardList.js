import React from "react";
import "./NewsCardList.css";
import Loader from "../Loader/Loader";

function NewsCardList({
  searchErrorMessage,
  children,
  searchResult,
  isOpen,
  articles,
  handleCount,
  showMoreButton,
}) {
  return (
    <section className={`news-card-list ${isOpen && "news-card-list_opened"}`}>
      {articles.length ? (
        <>
          <h2 className="news-card-list__title">Search results</h2>
          <div className="news-card-list__container">
            <div className="news-card-list__cards">{children}</div>
          </div>
          <button
            onClick={handleCount}
            className={`news-card-list__button ${
              showMoreButton && "news-card-list__button_active"
            }`}
          >
            Show more
          </button>
        </>
      ) : searchErrorMessage ? (
        <p className="news-card-list__error">{searchErrorMessage}</p>
      ) : (
        <Loader searchResult={searchResult} />
      )}
    </section>
  );
}

export default NewsCardList;
