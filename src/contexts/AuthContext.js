import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../services/firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    signOut(auth)
    setCurrentUser('')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setCurrentUser(user)
      }
    })
    return unsubscribe
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    login,
    logout
  }
  
  return (
    <AuthContext.Provider value={value}>
      { children } 
    </AuthContext.Provider>
  )
}

export default AuthProvider