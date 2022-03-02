import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import Dashboard from './main/Dashboard';

const PrivateRoute = ({children}) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />
}

export default PrivateRoute