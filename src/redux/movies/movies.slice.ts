import { createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../utils/types';

export interface MoviesState {
  movies: MovieType[];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
