import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"
const UsersContext = React.createContext()

const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0()

  const [myUser, setMyUser] = useState(null)
  useEffect(() => {
    setMyUser(user)
  }, [user])
  return (
    <UsersContext.Provider value={{
      user,
      loginWithRedirect,
      logout,
      myUser
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UsersContext)
}

export default UserProvider