import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/book/${item.id}`);
  };
  return (
    <div className="books-card">
      <img className="books-card-image" src={item?.thumbnailUrl} alt="" />
      <p className="books-card-title">{item?.title}</p>
      <p className="books-card-subText">
        Categories: {item?.categories?.join(",")}
      </p>
      <p className="card-pages">{item?.pageCount}</p>
      <button onClick={handleCardClick}>View Details</button>
    </div>
  );
};

export default Card;

// design -> https://in.pinterest.com/pin/592927107220198525/
