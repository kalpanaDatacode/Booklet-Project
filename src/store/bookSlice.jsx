import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedBook: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    updateBook: (state, action) => {
      const index = state.list.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) state.list[index] = { ...state.list[index], ...action.payload };
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { addBook, updateBook, setSelectedBook } = bookSlice.actions;
export default bookSlice.reducer;
