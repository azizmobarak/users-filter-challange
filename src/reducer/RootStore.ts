import { Reducer, combineReducers } from 'redux';
import { UsersReducer, UsersState } from 'src/Pages/UsersScreen/reducer';

type ZippedReducersType<T> = {
    [key in keyof T]: Reducer<T[key]>;
};

export interface RootState {
    usersState: UsersState;
}

const zipedReducer = (): ZippedReducersType<RootState> => ({
    usersState: UsersReducer,
});

export const combainedReducers = () =>
    combineReducers<RootState>(zipedReducer());