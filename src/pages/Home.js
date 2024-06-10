import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions";
import Card from "../components/Card";
import CardsList from "../components/CardsList";
import Sections from "../components/Sections";
import CardGrid from "../components/CardGrid";

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <CardGrid />
    </div>
  );
};

export default Home;
