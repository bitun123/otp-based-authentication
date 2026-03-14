import axios from "axios";

// Create an axios instance with the base URL and credentials configuration
const api = axios.create({
    baseURL : import.meta.env.VITE_URL,
    withCredentials : true
})


// API function to register a new user
export const register =async ({userName, phone, email, password})=>{
const response = await api.post("/api/auth/registration", {
    userName,
    phone,
    email,
    password
})
return response.data
}

// API function to log in a user
export const login = async ({userName, email, password})=>{
    const response = await api.post("/api/auth/login", {
        userName,
        email,
        password
    })
    return response.data
}


// API function to get the profile of the logged-in user
export const getProfile = async ()=>{
    const response = await api.get("/api/auth/profile")
    return response.data
}

