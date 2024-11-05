import { SortMethod } from "@/app/lib/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  categories: string[];
  authors: string[];
  selectedCategories: string[];
  selectedAuthors: string[];
  currentPage: number;
  sortMethod: SortMethod;
  searchTerm: string;
}

const initialState: FiltersState = {
  categories: [],
  authors: [],
  selectedCategories: [],
  selectedAuthors: [],
  currentPage: 1,
  sortMethod: {
    sortBy: "createdAt",
    order: "desc",
  },
  searchTerm: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFiltersState: (state) => {
      state.selectedCategories = [];
      state.selectedAuthors = [];
      state.sortMethod = initialState.sortMethod;
      state.searchTerm = initialState.searchTerm;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategories: (state, action) => {
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category !== action.payload
        );
        state.selectedAuthors = state.selectedAuthors.filter(
          (author) => !state.selectedAuthors[action.payload].includes(author)
        );
        return;
      }
      state.selectedCategories.push(action.payload);
    },
    setAuthors: (state, action) => {
      state.authors = action.payload;
    },
    setSelectedAuthors: (state, action) => {
      if (state.selectedAuthors.includes(action.payload)) {
        state.selectedAuthors = state.selectedAuthors.filter(
          (author) => author !== action.payload
        );
        return;
      }
      state.selectedAuthors.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    setSortMethod: (state, action) => {
      state.sortMethod = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  resetFiltersState,
  setCategories,
  setSelectedCategories,
  setAuthors,
  setSelectedAuthors,
  setCurrentPage,
  nextPage,
  previousPage,
  setSortMethod,
  setSearchTerm,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const getFilters = (state: RootState) => state.filters;
