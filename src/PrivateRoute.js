// import React from 'react'
// import { Route, Navigate } from 'react-router-dom'
// import { useAuth } from '../src/contexts/AuthContext'

// const PrivateRoute = ({component: Component, ...rest}) => {
//   const { currentUser } = useAuth()

//   return (
  
//     <Route
//     {...rest}
//     render={props => {
//       return currentUser ? <Component {...props} /> : <Navigate to='/' />
//     }}
//     >

//     </Route>
//   )
// }

// export default PrivateRoute