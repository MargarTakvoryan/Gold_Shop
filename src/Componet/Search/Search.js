import React, { useState } from 'react'
import styles from "./Search.module.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [inputValue, setInputValue] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className={styles.searchContiner}>
      
      <form className={styles.searchBox} onSubmit={(e) => {
        e.preventDefault()
        setSearchParams({
          search: inputValue 
        })
      }}>
        <input type={"text"} className={styles.input} placeholder={"Поиск"} onChange={(e) => {
          setInputValue(e.target.value)
        }} />
        <button className={styles.searchIconBox} onClick={()=>{
         
          setSearchParams({
              search: inputValue
            })
          
         
        }}>
          <AiOutlineSearch className={styles.searchIcon} />
        </button>
      </form>
    </div>
  )
}

export default Search