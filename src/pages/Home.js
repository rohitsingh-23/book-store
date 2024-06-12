import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, fetchBooks, setBooks } from "../redux/actions";
import CardGrid from "../components/CardGrid";
import Loader from "../components/Loader";
import EditBookModal from "../components/EditBookModal";
import axios from "axios";

const Home = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleOpenModal = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  const add = (item) => {
    dispatch(addBooks(item));
    axios.post("https://json-server-uz5c.onrender.com/books", item);
  };

  if (books.length == 0) {
    return <Loader />;
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Add New book</button>
      {modal && <EditBookModal type={"ADD"} onClose={onClose} onUpdate={add} />}
      <CardGrid />
    </div>
  );
};

export default Home;
