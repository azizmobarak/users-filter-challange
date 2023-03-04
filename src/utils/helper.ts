import { faker } from '@faker-js/faker';

export interface Users {
    name: string;
}

export const getFiltredList = (list: Users[], value: string): Users[] =>
    list.filter((names) => names.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)

// WE CAN USE API INSTEAD OF STATIC DATA
export const generateUsers = (): Users[] => {
    let usersData: Users[] = [];
    for (let i = 0; i < 100; i++) {
        const name = { name: faker.name.fullName() }
        usersData.push(name)
    }
    return usersData;
}