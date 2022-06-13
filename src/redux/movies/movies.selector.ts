import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const movieState = (state: RootState) => state.movies;

export const selectMovies = createSelector([movieState], (state) => state.movies);

export const selectMoviesLoading = createSelector([movieState], (state) => state.loading);

export const selectMoviesError = createSelector([movieState], (state) => state.error);

export const selectMoviesObject = createSelector([movieState], (state) => state);
