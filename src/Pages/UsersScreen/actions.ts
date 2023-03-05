import { createAction } from "src/reducer/actionCreator"
import { Users } from "./reducer"


export const UsersAction = {
    getUsersList: 'GET_USERS_LIST',
    storeUsersList: 'STORE_USERS_LIST',
    setSearchValue: 'SET_SEARCH_VALUE',
    setFilteredList: 'SET_FILTERED_LIST',
}

export const UsersViewAction = {
    getListOfUsers: (payload: Users[]) => createAction<Users[]>(UsersAction.getUsersList, payload),
    storeUsersList: (payload: Users[]) => createAction<Users[]>(UsersAction.storeUsersList, payload),
    setSearchValue: (payload: string) => createAction<string>(UsersAction.setSearchValue, payload),
    setFilteredList: (payload: string) => createAction<string>(UsersAction.setFilteredList, payload),
}