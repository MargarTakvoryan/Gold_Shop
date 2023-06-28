import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import styles from './Man.module.css'
import AddProductCategoryModal from '../../Modals/AddProductCategoryModal/AddProductCategoryModal';

function Man({ manCategory ,addManCategory}) {
  // console.log(addGenderCategory);
  const [open, setOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
   
  // console.log(manCategory);
  return (
    <div className={styles.Man_Continer}>
      {
        manCategory.map((post) => {
          if (searchParams.get("man") === "man") {
          return <div key={post.id} className={styles.manCategoryContiner} onClick={() => {
            // filterID(post.id)
            setSearchParams({
              man: searchParams.get("man"),
              category: post.title,
            })
          }}>
            <img className={styles.manCategoryImg} src={post.imgUrl} alt='aaa' />
            <p className={styles.manCategoryTitle}>{post.title}</p>
          </div>
          }
        })

      }

      <div className={styles.man_page_add_category_modal} onClick={() => {
        setOpen(true)
      }}>
        <HiPlus />
      </div>
      {open && <AddProductCategoryModal  setOpen={setOpen}  addManCategory={addManCategory}/>}
    
    </div>
  )
}

export default Man