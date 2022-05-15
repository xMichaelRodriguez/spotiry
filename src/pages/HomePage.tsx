import { useContext } from 'react'
import { GridMusic } from '../components/GridMusic'
import { SearchComponent } from '../components/SearchComponent'
import { AuthContext } from '../context/AuthContext'
import { helpHttp } from '../lib/helpHttp'
import Styles from '../styles/pages/HomePage.module.css'

const baseUrl = import.meta.env.VITE_BASE_URL
export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  
  const handlePlay = () => {
    console.log(auth)
    const options = {
      headers: {
        Authorization: `Bearer  ${auth}`,
      },
    }
    console.log(options)
    const resp = helpHttp().get({ endPoint: `${baseUrl}me/playlists`, options })
  }
  return (
    <div className={Styles.wrapper}>
      <SearchComponent />
      <GridMusic />
      <button onClick={handlePlay} type="button">
        click
      </button>
    </div>
  )
}

export default HomePage
