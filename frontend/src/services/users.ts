import { User } from "../interfaces/user";


const baseUrl = 'localhost:3000';

export const getUsers = async (userId: string): Promise<User[]> => {
    const request = await fetch(`${baseUrl}/Users?userId=${userId}`);
    const data: User[] = await request.json();
    return data;
}


export const createUser = async (user: User): Promise<User[]> => {
    const formData = new FormData();
    formData.append('userId', 'sdfklsçdf');
    formData.append('name',  user.name);
    formData.append('password', user.password);

    const request = await fetch(`${baseUrl}/Users`, {
        method: 'POST',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create User!');
    }

    const data: User[] = await request.json();
    return data;
};

export const editUser = async (user: User): Promise<User[]> => {
    const formData = new FormData();
    formData.append('userId', 'sdfklsçdf');
    formData.append('name',  user.name);
    formData.append('password', user.password);


    const request = await fetch(`${baseUrl}/Users`, {
        method: 'SET',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create User!');
    }

    const data: User[] = await request.json();
    return data;
}

export const deleteUser = async (userId: string): Promise<number> => {
    const formData = new FormData();
    formData.append('UserId', userId);

    const request = await fetch(`${baseUrl}/Users`, {
        method: 'DELETE',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create User!');
    }

    return request.status;
}