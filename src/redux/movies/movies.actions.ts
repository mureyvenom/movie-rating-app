import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { WritableDraft } from 'immer/dist/internal';
import apiConnect from '../../utils/apiConnect';
// import { MovieType } from '../../utils/types';
import { MoviesState } from './movies.slice';

interface actionType {
  payload: any;
  type: string;
}

export const setMovies = (state: WritableDraft<MoviesState>, action: actionType) => {
  state.movies = action.payload;
};

export const searchAndFetch = createAsyncThunk(
  'movies/fetchBySearchStatus',
  async (search: string, { rejectWithValue }) => {
    try {
      const response = await apiConnect.get('', {
        params: {
          s: search,
        },
      });
      if (!response.data?.Error) {
        return response.data.Search;
      } else {
        return rejectWithValue(response.data.Error);
      }
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      return rejectWithValue((err.response?.data as any).Error || 'Something went wrong');
    }
  }
);
