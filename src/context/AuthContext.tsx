import { createContext } from 'react'

// export type AuthTokenProps = {
//   token: string
//   handleAuth: () => void
// }
// export const AuthContext = createContext<AuthTokenProps>({} as AuthTokenProps)

export type AuthContextProps = {
  auth: string
  handleAuth: Function
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
