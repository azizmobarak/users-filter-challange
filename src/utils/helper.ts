import { faker } from '@faker-js/faker';
import { store } from '../reducer/store';
import { UsersViewAction } from 'src/pages/usersScreen/actions';
import { Users } from 'src/pages/usersScreen/reducer';

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