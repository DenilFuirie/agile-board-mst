import axios from 'axios';


const baseUrl = 'http://localhost:3001';

const baseApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})

export interface IUsers {
    id: string,
    createdAt: string,
    name: string,
    avatar: string
}

export const usersApi = {
    getUsers() {
        baseApi.get<IUsers[]>('/users')
    }
}