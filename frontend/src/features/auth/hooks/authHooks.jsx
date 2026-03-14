import { useDispatch } from "react-redux";
import { setError, setLoading, setUser } from "../authState/authSlice";
import { register, login, getProfile } from "../services/auth.api";


export const useAuth = () => {
    const dispatch = useDispatch()


    async function handleRegister({ userName, phone, email, password }) {
        try {
            dispatch(setLoading(true))
            const response = await register({ userName, phone, email, password })
        } catch (error) {
dispatch(setError(error.response?.data?.message || "Registration failed"))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

    async function handlogin({ userName, email, password }) {
        try {
            dispatch(setLoading(true))
            const response = await login({ userName, email, password })
            dispatch(setUser(response.user))
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Login failed"))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    async function fetchProfile() {
        try {
            dispatch(setLoading(true))
            const response = await getProfile()
            dispatch(setUser(response.user))
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Failed to fetch profile"))
        }
        finally {
            dispatch(setLoading(false))
        }
    }
    return { handleRegister, handlogin, fetchProfile };

}