import { createContext } from 'react'
import { IPlayLists, IResponseSongs } from '../interfaces/interfaces'

// export type AuthTokenProps = {
//   token: string
//   handleAuth: () => void
// }
// export const AuthContext = createContext<AuthTokenProps>({} as AuthTokenProps)

export type AuthContextProps = {
  auth: string
  handleAuth: Function
  playList: IPlayLists
  handlePlayList: (playList: IPlayLists) => void
  songs: IResponseSongs
  handleSongs: (songs: IResponseSongs) => void
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
