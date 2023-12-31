import { combineReducers } from '@reduxjs/toolkit';
import film from './film.ts';
import app from './app.ts';
import review from './review.ts';
import user from './user.ts';

export const rootReducer = combineReducers ({film, app, review, user});
