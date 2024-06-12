import React, { useState } from "react";
import "./EditBookModal.css";

const EditBookModal = ({ book, onClose, onUpdate, type }) => {
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleUpdate = () => {
    let updatedAuthors = editedBook?.authors;
    let updatedCategories = editedBook?.categories;

    if (editedBook?.authors.length > 0) {
      if (!Array.isArray(editedBook?.authors)) {
        updatedAuthors = editedBook?.authors
          ?.split(",")
          ?.map((author) => author.trim());
      }

      if (!Array.isArray(editedBook?.categories)) {
        updatedCategories = editedBook?.categories
          .split(",")
          .map((category) => category.trim());
      }
    }

    const updatedBookDetails = {
      ...editedBook,
      authors: updatedAuthors,
      categories: updatedCategories,
    };

    onUpdate(updatedBookDetails);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Book Details</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="shortDescription"
            value={editedBook.shortDescription}
            onChange={handleChange}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="id"
            value={editedBook.id}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Published Date:
          <input
            type="date"
            name="publishedDate"
            value={editedBook.publishedDate?.date?.slice(0, 10)}
            onChange={handleChange}
          />
        </label> */}
        <label>
          Authors:
          <input
            type="text"
            name="authors"
            value={
              Array.isArray(editedBook?.authors)
                ? editedBook.authors?.join(", ")
                : editedBook?.authors
            }
            onChange={handleChange}
          />
        </label>
        <label>
          Categories:
          <input
            type="text"
            name="categories"
            value={
              Array.isArray(editedBook?.categories)
                ? editedBook.categories?.join(", ")
                : editedBook?.categories
            }
            onChange={handleChange}
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            name="pageCount"
            value={editedBook.pageCount}
            onChange={handleChange}
          />
        </label>
        <label>
          Thumbnail Url:
          <input
            type="text"
            name="thumbnailUrl"
            value={editedBook.thumbnailUrl}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleUpdate}>
          {type == "ADD" ? "Add" : "Update"}
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditBookModal;
