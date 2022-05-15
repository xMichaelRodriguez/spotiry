import { useState } from 'react'
import { AuthContext } from './AuthContext'

interface props {
  children: JSX.Element | JSX.Element[]
}
export const AuthProvider = ({ children }: props) => {
  const [auth, setAuth] = useState('')

  const handleAuth = (token: string) => {
    
    setAuth(token)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
 
  )
}
