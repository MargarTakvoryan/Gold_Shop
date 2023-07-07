import React, { useState } from 'react'
import styles from './AddSub_Category.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

function AddSub_CategoryModal({ setOpen, addManSubCategory, addWomanSubCategory }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState()
  return (
    <div className={styles.modal} onClick={() => {
      setOpen(false)

    }}>
      <form className={styles.modalContiner} onClick={(e) => {
        e.stopPropagation(
        )
      }} onSubmit={(e) => {
        e.preventDefault()
        setOpen(false)
        if (searchParams.get("gender") === 'man' && searchParams.get("category") && inputValue.trim()) {
          addManSubCategory(inputValue, searchParams.get("category"))
        }
        if (searchParams.get("gender") === 'woman' && searchParams.get("category") && inputValue.trim()) {
          addWomanSubCategory(inputValue, searchParams.get("category"))
        }
      }}>
        <div className={styles.title}>
          <p>Кольцo : Добавить Подкатегория</p>
          <AiOutlineClose className={styles.closeButtom} onClick={() => {
            setOpen(false)

          }} />
        </div>
        <input type='text' placeholder='Подкатегория' className={styles.addSubCategoryInput} onChange={(e) => {
          setInputValue(e.target.value)
        }} />
        <button onClick={() => {
          setOpen(false)
          if (searchParams.get("gender") === 'man' && searchParams.get("category") && inputValue.trim()) {
            addManSubCategory(inputValue, searchParams.get("category"))
          }
          if (searchParams.get("gender") === 'woman' && searchParams.get("category") && inputValue.trim()) {
            addWomanSubCategory(inputValue, searchParams.get("category"))
          }
        }}>Добавить</button>
      </form>
    </div>
  )
}

export default AddSub_CategoryModal