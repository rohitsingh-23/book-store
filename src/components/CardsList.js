import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./CardsList.css";

const CardsList = ({ books }) => {
  const cardsListRef = useRef(null);

  // useEffect(() => {
  //    books = useSelector((store) => store.books);
  // }, [])
  //  books = useSelector((store) => store.books);

  const scrollLeft = () => {
    cardsListRef.current.scrollBy({
      top: 0,
      left: -750,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsListRef.current.scrollBy({
      top: 0,
      left: 750,
      behavior: "smooth",
    });
  };
  return (
    books && (
      <div className="cards-container">
        <button className="arrow left" onClick={scrollLeft}>
          ◀
        </button>
        <div ref={cardsListRef} className="cards-list">
          {books.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    )
  );
};

export default CardsList;
