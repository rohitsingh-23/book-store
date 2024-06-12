import { ADD_BOOKS, EDIT_BOOKS, SET_BOOKS } from "./actionTypes";

const initialState = [];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_BOOKS:
      return action.payload;
    case EDIT_BOOKS:
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    case ADD_BOOKS:
      console.log("first");
      let temp = [action.payload, ...state];
      console.log(temp);
      return temp;
    default:
      return state;
  }
};
