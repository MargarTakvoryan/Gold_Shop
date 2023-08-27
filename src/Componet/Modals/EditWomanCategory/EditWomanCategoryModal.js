import React, { useEffect, useState } from 'react'
import styles from './EditWomanCategoryModal.module.css'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai';
import { RiImageAddLine } from 'react-icons/ri';

function EditWomanCategoryModal({editWomanCategory,setEditModalOpen,filterCategoryId}) {



    const [file, setFile] = useState();
    const [category,setCategory] = useState({
        title:"",
        imgUrl:"",
    })
    

    useEffect(()=>{
        axios.get(`http://localhost:3000/man/${filterCategoryId}`)
        .then((response)=>{
            setCategory(response.data)
        })
    },[filterCategoryId])

    // const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        setCategory({...category,imgUrl:URL.createObjectURL(e.target.files[0])});
    }
    return (
        <div className={styles.modal} onClick={()=>{
            setEditModalOpen(false)
            
        }}>
            <div className={styles.modalContiner} onClick={(e)=>{
                e.stopPropagation()
                // e.preventDefault()
            }}>
                <div className={styles.title}>
                    <p>Редактировать</p>
                    <AiOutlineClose style={{cursor:"pointer",color: "rgba(79, 79, 79, 0.55)"}} onClick={()=>{
                        setEditModalOpen(false)
                    }}/>
                </div>
                <input type='text' className={styles.inputAddName} value={category.title} onChange={(e)=>{
                    setCategory({...category,title:e.target.value})
                }}/>
                {/* <input type='file' onChange={handleChange}/> */}
                {!file ? <label className={styles.addPhoto}>
                    <input type={"file"} className={styles.addPhotoInput} onChange={handleChange} />
                    <RiImageAddLine className={styles.iconPhoto} />
                    <p className={styles.inputBoxText}>
                    Загрузить Новое <br />Фото
                    </p>
                </label> : <div className={styles.imgBox}><img className={styles.img} src={file} alt={"aaa"} /></div>
                }
                <button onClick={(e)=>{
                    // e.preventDefault()
                    editWomanCategory(filterCategoryId,category)
                    setEditModalOpen(false)
                }}>Добавить</button>
            </div>
          
        </div>
    )
}

export default EditWomanCategoryModal