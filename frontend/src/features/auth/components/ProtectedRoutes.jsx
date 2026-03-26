import React from 'react'
import { useSelector } from 'react-redux'


function ProtectedRoutes({children}) {
const {user} = useSelector((state)=>state.auth)


console.log("ProtectedRoutes user:", user)



  return (
    <div>{children}</div>
  )
}

export default ProtectedRoutes