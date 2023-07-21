import React, { useEffect, useState } from 'react'
import styles from './EditManSubCategory.module.css'
import axios from 'axios'
// import { useSearchParams } from 'react-router-dom'

function EditManSubCategory({ editManSubCategory, filterId, setEditManSubModalOpen }) {
  // const [searchParams] = useSearchParams()
  

  const [subCatgory, setSubCategory] = useState({
    name: "",
    // type: searchParams.get('category')
  })
 
  useEffect(() => {
    axios.get(`http://localhost:3000/manSub_Category/${filterId}`)
      .then((response) => {
        setSubCategory(response.data)
      })
  }, [filterId])
  return (
    <div className={styles.modalContiner} onClick={() => {
      setEditManSubModalOpen(false)
    }}>
      <div className={styles.modalBox} onClick={(e) => {
        e.stopPropagation()
      }}>
        <input type='text' value={subCatgory.name} onChange={(e) => {
          setSubCategory({ ...subCatgory, name: e.target.value })
        }} />
        <button onClick={()=>{
          editManSubCategory(filterId,subCatgory)
          setEditManSubModalOpen(false)
        }}>Добавить</button>
      </div>
    </div>
  )
}

export default EditManSubCategory