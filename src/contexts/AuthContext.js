import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../services/firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setCurrentUser(user)
      }
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider