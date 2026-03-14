import React,{useEffect} from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './App.Routes'
import { useAuth } from '../features/auth/hooks/authHooks'


function App() {
const auth =   useAuth();
useEffect(() => {
  auth.fetchProfile()
}, [])
  return (
    <RouterProvider router={routes} />
  )
}

export default App