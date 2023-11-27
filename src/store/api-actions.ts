import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig } from '../types/state.ts';
import { Film, FilmCard, FilmReview, UserCredentials, UserData } from '../types/types.ts';
import { dropToken, saveToken } from '../services/token.ts';

export const loadFilms = createAsyncThunk<FilmCard[], undefined, AsyncActionConfig>(
  'films/loadFilms',
  async (_arg, {extra: api}) =>
    (await api.get<FilmCard[]>('/films')).data,
);

export const loadPromoFilm = createAsyncThunk<Film, undefined, AsyncActionConfig>(
  'films/loadPromoFilm',
  async (_arg, {extra: api}) =>
    (await api.get<Film>('/promo')).data,
);

export const loadFilmDetails = createAsyncThunk<Film, string, AsyncActionConfig>(
  'films/loadFilmDetails',
  async (id: string, {extra: api}) =>
    (await api.get<Film>(`/films/${id}`)).data,
);

export const loadSuggestions = createAsyncThunk<FilmCard[], string, AsyncActionConfig>(
  'films/loadSuggestions',
  async (id: string, {extra: api}) =>
    (await api.get<FilmCard[]>(`/films/${id}/similar`)).data,
);

export const loadReviews = createAsyncThunk<FilmReview[], string, AsyncActionConfig>(
  'reviews/loadReviews',
  async (filmId: string, {extra: api}) =>
    (await api.get<FilmReview[]>(`/comments/${filmId}`)).data,
);

export const verifyToken = createAsyncThunk<UserData, undefined, AsyncActionConfig>(
  'user/verifyToken',
  async (_arg, { extra: api }) => {
    try {
      return (await api.get<UserData>('/login')).data;
    } catch (e) {
      dropToken();
      throw e;
    }
  }
);

export const signIn = createAsyncThunk<UserData, UserCredentials, AsyncActionConfig>(
  'user/signIn',
  async ({ email, password }: UserCredentials, { extra: api }) => {
    const data = (await api.post<UserData>('/login', { email, password })).data;
    saveToken(data.token);
    return data;
  }
);

export const signOut = createAsyncThunk<UserData, undefined, AsyncActionConfig>(
  'user/signOut',
  async (_arg, { extra: api }) => await api.delete('/logout')
);