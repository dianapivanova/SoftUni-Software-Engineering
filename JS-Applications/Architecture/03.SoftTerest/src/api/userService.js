import { post } from "./requester.js"

const endpoints = {
    login: "login",
    register: "users/register",
    logout: "logout",

}

async function register(data) {
    return await post(endpoints.register, data)
}

export {
    register
}