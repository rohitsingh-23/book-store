import axios from "axios";
import { SET_BOOKS } from "./actionTypes"

const API_URL = " https://json-server-uz5c.onrender.com/books";

export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        payload: books
    }
}

export const fetchBooks = () => {
    return async (dispatch) => {
        const res = await axios.get(API_URL);
        dispatch(setBooks(res.data))
    }
}

export const editBook = (book) => {
    return async (dispatch) => {
        let res = await axios.put(`${API_URL}/${book.id}`, book);
        console.log("resdsfasf", res.data)
        dispatch({
            type: "EDIT_BOOKS",
            payload: book
        })
    }
    
}