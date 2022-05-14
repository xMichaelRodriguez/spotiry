import styles from '../styles/components/searchBox.module.css'
export const SearchComponent = () => {
  return (
    <header className={styles.searchMainBox}>
      <form className={styles.searchForm}>
        <input placeholder="Search Music" type="search" />
      </form>
    </header>
  )
}
