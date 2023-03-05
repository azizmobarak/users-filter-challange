import { createStore } from 'redux';
import { combainedReducers } from './RootStore';

export const store = createStore(combainedReducers());