import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./CardGrid.css"

const CardGrid = () => {
  const books = useSelector((store) => store.books);
  return (
    <div className="card-grid">
      {books.map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </div>
  );
};

export default CardGrid;
