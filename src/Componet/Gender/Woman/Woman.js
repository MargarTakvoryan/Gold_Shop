import React, { useState } from 'react'
import styles from './Woman.module.css'
import AddProductCategoryModal from '../../Modals/AddProductCategoryModal/AddProductCategoryModal'
import { HiPlus } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';

function Woman({womanCategory,addWomanCategory}) {
  const [open, setOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className={styles.Man_Continer}>
      {
        womanCategory?.map((post) => {
          
          // if (searchParams.get("woman") === "woman") {
          return <div key={post.id} className={styles.manCategoryContiner} onClick={() => {
            // filterID(post.id)
            setSearchParams({
              gender: searchParams.get("gender"),
              category: post.title,
            })
          }}>
            <img className={styles.manCategoryImg} src={post.imgUrl} alt='aaa' />
            <p className={styles.manCategoryTitle}>{post.title}</p>
          </div>
          
        })

      }

      <div className={styles.man_page_add_category_modal} onClick={() => {
        setOpen(true)
      }}>
        <HiPlus />
      </div>
      {open && <AddProductCategoryModal  setOpen={setOpen} addWomanCategory={addWomanCategory} />}
    
    </div>
  )
}

export default Woman