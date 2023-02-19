import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const initialState = {};

const middleware = [thunk];

const store = configureStore (
  {reducer: rootReducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;