import { faker } from '@faker-js/faker';

// WE CAN USE API INSTEAD OF STATIC DATA
export const generateUsers = () => {
    let usersData = [];
    for (let i = 0; i < 100; i++) {
        const name = { name: faker.name.fullName() }
        usersData.push(name)
    }
    return usersData;
}