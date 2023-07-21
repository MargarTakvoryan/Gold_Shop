import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import { RiImageAddLine } from 'react-icons/ri';
import styles from "./AddProductCategoryModal.module.css"

function AddProductCategoryModal({ setOpen, addManCategory, addWomanCategory }) {
    const [choous, setChoous] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
    return (
        <div className={styles.modalContiner} onClick={() => {
            setOpen(false)
        }}>
            <form className={styles.modalBox} onClick={(e) => {
                e.stopPropagation()
            }} onSubmit={(e) => {
                e.preventDefault()
                if (choous === false && inputValue.trim()) {
                    addWomanCategory(inputValue, file)
                    setOpen(false)
                } else if (choous === true && inputValue.trim()) {
                    addManCategory(inputValue, file)
                    setOpen(false)
                }
            }}>
                <div className={styles.title}>
                    Добавить Категория
                    <AiOutlineClose onClick={() => {
                        setOpen(false)
                    }} className={styles.icon} />
                </div>
                <div className={styles.ganderContiner}>
                    <div className={styles.womanBox} style={!choous ? { boxShadow: '0px 0px 10px' } : null} onClick={() => {
                        setChoous(false)
                    }}>
                        <SlUserFemale style={!choous ? { color: "blue" } : null} />
                        Женский
                    </div>
                    <div className={styles.manBox} style={choous ? { boxShadow: '0px 0px 10px' } : null} onClick={() => {
                        setChoous(true)
                    }}>
                        <SlUser style={choous ? { color: "blue" } : null} />
                        Мужской
                    </div>
                </div>
                <input type={"text"} className={styles.inputAddName} style={!inputValue ? { placeholder: "red" } : null} placeholder={"Категория"} onChange={(e) => {
                    setInputValue(e.target.value)
                }} />

                {!file ? <label className={styles.addPhoto}>
                    <input type={"file"} className={styles.addPhotoInput} onChange={handleChange} />
                    <RiImageAddLine className={styles.iconPhoto} />
                    <p className={styles.inputBoxText}>
                        Загрузить<br />Фото
                    </p>
                </label> : <div className={styles.imgBox}><img className={styles.img} src={file} alt={"aaa"} /></div>}
                <div className={styles.addBtnContiner} >
                    <button className={styles.addButton} onClick={() => {
                        if (choous === false && inputValue.trim()) {
                            addWomanCategory(inputValue, file)
                            setOpen(false)
                        } else if (choous === true && inputValue.trim()) {
                            addManCategory(inputValue, file)
                            setOpen(false)
                        }
                    }}>Добавить</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductCategoryModal