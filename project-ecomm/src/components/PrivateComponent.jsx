import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
    const { isAuthenticated,user } = useSelector(state => state.user)

    return isAuthenticated && user?<Outlet/>:<Navigate to="/register" />
}

export default PrivateComponent;