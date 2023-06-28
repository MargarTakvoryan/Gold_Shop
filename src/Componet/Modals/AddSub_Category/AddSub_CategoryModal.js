import React from 'react'
import styles from './AddSub_Category.module.css'
import { AiOutlineClose } from 'react-icons/ai';

function AddSub_CategoryModal({setOpen}) {
  return (
    <div className={styles.modal} onClick={()=>{
      setOpen(false)
      
    }}>
      <div className={styles.modalContiner} onClick={(e)=>{
        e.stopPropagation(
        )
      }}>
        <div className={styles.title}>
          <p>Кольцo : Добавить Подкатегория</p>
          <AiOutlineClose className={styles.closeButtom} onClick={()=>{
            setOpen(false)
          }}/>
        </div>
        <input type='text' placeholder='Подкатегория' className={styles.addSubCategoryInput}/>
        <button onClick={()=>{
          setOpen(false)
        }}>Добавить</button>
      </div>
    </div>
  )
}

export default AddSub_CategoryModal