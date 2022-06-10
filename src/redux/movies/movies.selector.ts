import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const movieState = (state: RootState) => state.movies;

export const selectCounterObject = createSelector(movieState, (state) => state);

export const selectMovies = createSelector(movieState, (state) => state.movies);
