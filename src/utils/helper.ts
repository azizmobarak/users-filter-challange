import { faker } from '@faker-js/faker';
import { store } from '../reducer/store';
import { UsersViewAction } from '../Pages/UsersScreen/actions';
import { Users } from 'src/Pages/UsersScreen/reducer';

export const getFiltredList = (list: Users[], value: string): Users[] =>
    list.filter((names) => names.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)

// WE CAN USE API INSTEAD OF STATIC DATA
export const generateUsers = () => {
    let usersData: Users[] = [];
    for (let i = 0; i < 100; i++) {
        const name = { name: faker.name.fullName() }
        usersData.push(name)
    }
    store.dispatch(UsersViewAction.getListOfUsers(usersData))
    store.dispatch(UsersViewAction.storeUsersList(usersData))
}