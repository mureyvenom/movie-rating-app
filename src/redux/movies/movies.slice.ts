import { createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../utils/types';
import { searchAndFetch, clearError, clearMovies } from './movies.actions';

export interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: '',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearError,
    clearMovies,
  },
  extraReducers: (builder) => {
    builder.addCase(searchAndFetch.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    });
    builder.addCase(searchAndFetch.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.movies = [];
    });
    builder.addCase(searchAndFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearError: clear, clearMovies: resetMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
