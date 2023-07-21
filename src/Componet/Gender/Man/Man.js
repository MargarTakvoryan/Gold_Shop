import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { useSearchParams } from 'react-router-dom';
import styles from './Man.module.css'
import AddProductCategoryModal from '../../Modals/AddProductCategoryModal/AddProductCategoryModal';
import EditManModal from '../../Modals/EditManModal/EditManModal';

function Man({editManCategory,deleteManCategory, manCategory, addManCategory }) {
  const [open, setOpen] = useState(false)
  const [editModalOpen,setEditModalOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterCategoryId,setFilterCategoryId] = useState()

  return (
    <div className={styles.man_Continer}>
      {
        manCategory?.map((post) => {
         
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
                <div className={styles.iconeBox} onClick={()=>{
                  setEditModalOpen(true)
                  setFilterCategoryId(post.id)
                }}>
                  Edit
                  <CiEdit />
                </div>
                <div className={styles.iconeBox} onClick={()=>{
                  deleteManCategory(post.id)
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
      {open && <AddProductCategoryModal setOpen={setOpen} addManCategory={addManCategory} />}
      {editModalOpen && <EditManModal editManCategory={editManCategory} setEditModalOpen={setEditModalOpen} filterCategoryId={filterCategoryId}/>}
    </div>
  )
}

export default Man