import { EDIT_BOOKS, SET_BOOKS } from "./actionTypes"

const initialState = []

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return action.payload
        case EDIT_BOOKS:
            return state.map(book => book.id === action.payload.id ? action.payload : book)
        default:
            return state
    }
}