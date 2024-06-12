import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import Chip from "../components/Chip";
import EditBookModal from "../components/EditBookModal";
import { useDispatch } from "react-redux";
import { editBook } from "../redux/actions";
import Loader from "../components/Loader";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const dayWithSuffix = day + getDaySuffix(day);

    const monthName = monthNames[month];

    return `${dayWithSuffix} ${monthName} ${year}`;
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://json-server-uz5c.onrender.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      });
  }, []);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (updatedBook) => {
    console.log(updatedBook);
    dispatch(editBook(updatedBook));
    setBook(updatedBook);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    book && (
      <div className="book-details-container">
        <div className="book-details-img">
          <img src={book.thumbnailUrl} alt="" />
        </div>
        <div className="book-details">
          <p className="book-detail-title">{book.title}</p>
          <div className="book-detail-desc">
            <p>Description:</p> <span>{book.shortDescription}</span>
          </div>
          <div>
            <p>ISBN:</p> <span>{book.id}</span>
          </div>
          <div>
            <p>Pages:</p> <span>{book.pageCount}</span>
          </div>
          {book.publishedDate && (
            <div>
              <p>Published Date: </p>
              <span>{formatDate(book.publishedDate["date"])}</span>{" "}
            </div>
          )}
          {book.authors && (
            <div className="book-details-author">
              <p>{book.authors.length > 1 ? "AUTHORS" : "AUTHOR"}</p>
              <div className="">
                {book.authors.map((item) => {
                  return <Chip text={item} />;
                })}
              </div>
            </div>
          )}
          {book.categories && (
            <div className="book-details-author">
              <p>
                {book.categories.length > 1
                  ? "categories".toUpperCase()
                  : "category".toUpperCase()}
              </p>
              <div className="">
                {book.categories.map((item) => {
                  return <Chip text={item} />;
                })}
              </div>
            </div>
          )}
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        </div>
        {isModalOpen && (
          <EditBookModal
            book={book}
            onClose={handleModalClose}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    )
  );
};

export default BookDetails;
