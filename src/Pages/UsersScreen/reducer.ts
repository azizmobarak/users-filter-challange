import { AnyAction, Reducer } from "redux";
import { UsersAction } from "./actions";

export interface Users {
    name: string;
}

export interface UsersState {
    list: Users[];
    storedList: Users[];
    searchValue: string;
}

export const intialUserState: UsersState = {
    list: [],
    storedList: [],
    searchValue: '',
}

export const UsersReducer: Reducer<UsersState> = (state: UsersState = intialUserState, action: AnyAction): UsersState => {
    switch (action.type) {
        case UsersAction.getUsersList:
            return {
                ...state,
                list: action.payload,
            }
        case UsersAction.storeUsersList:
            return {
                ...state,
                storedList: action.payload,
            }
        case UsersAction.setSearchValue:
            return {
                ...state,
                searchValue: action.payload,
                list: (action.payload && isStartRemovingInput(action.payload, state.searchValue)) ? state.list : state.storedList,
            }
        case UsersAction.setFilteredList:
            return {
                ...state,
                list: state.list.filter((names) => names.name.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1),
            }
        default:
            return state;
    }
}

const isStartRemovingInput = (firstValue: string, secondValue: string): boolean => {
    if (firstValue > secondValue) return true;
    return false;
}