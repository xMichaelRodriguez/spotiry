import { GridMusic } from '../components/GridMusic'
import { SearchComponent } from '../components/SearchComponent'
import Styles from '../styles/pages/HomePage.module.css'
export const HomePage = () => {
  return (
    <div className={Styles.wrapper}>
      <SearchComponent />
      <GridMusic />
    </div>
  )
}

export default HomePage
