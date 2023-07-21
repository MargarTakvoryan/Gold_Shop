import React, { useState } from 'react'
import styles from './Woman.module.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import AddProductCategoryModal from '../../Modals/AddProductCategoryModal/AddProductCategoryModal'
import { HiPlus } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';

function Woman({deleteWomanCategory,womanCategory,addWomanCategory}) {
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
            <div className={styles.hoverBox}>
              <BsThreeDotsVertical />
              <div className={styles.editDeletContiner} onClick={(e)=>{
                e.stopPropagation()
              }}>
                <div className={styles.iconeBox}>
                  Edit
                  <CiEdit />
                </div>
                <div className={styles.iconeBox} onClick={()=>{
                  deleteWomanCategory(post.id)
                }}>
                  Delete
                  <AiFillDelete />
                </div>
              </div>
            </div>
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