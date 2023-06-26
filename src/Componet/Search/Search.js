import React from 'react'
import styles from "./Search.module.css"
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  return (
    <div className={styles.searchContiner}>
      <div className={styles.searchBox}>
        <input type={"text"} className={styles.input} placeholder={"Поиск"} />
        <div className={styles.searchIconBox}>
          <AiOutlineSearch className={styles.searchIcon} />
        </div>
      </div>
    </div>
  )
}

export default Search