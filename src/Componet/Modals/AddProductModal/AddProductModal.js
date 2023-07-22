import React from 'react'
import styles from './AddProductModal.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import { RiImageAddLine } from 'react-icons/ri';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';



function AddProductModal({ addProduct, setAddProductCompOpen, manSubCategory, womanSubCategory, womanCategory, manCategory }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [nameInput, setNameInput] = useState('')
    const [priceInput, setPriceInput] = useState(Number)

    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [file1, setFile1] = useState();
    function handleChange1(e) {
        setFile1(URL.createObjectURL(e.target.files[0]));
    }
    const [file2, setFile2] = useState();
    function handleChange2(e) {
        setFile2(URL.createObjectURL(e.target.files[0]));
    }
    const [file3, setFile3] = useState();
    function handleChange3(e) {
        setFile3(URL.createObjectURL(e.target.files[0]));
    }
    const [file4, setFile4] = useState();
    function handleChange4(e) {
        setFile4(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className={styles.addProductModal} onClick={() => {
            setAddProductCompOpen(false)
        }}>
            <div className={styles.addProductContiner} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={styles.title}>
                    <h3>Добавить Изделия</h3>
                    <AiOutlineClose style={{ cursor: "pointer" }} onClick={() => {
                        setAddProductCompOpen(false)
                    }} />
                </div>
                <div className={styles.gender_Continer}>
                    <nav className={styles.gender_box}>
                        <div style={searchParams.get("gender") === "woman" ? { color: "blue" } : {}} className={styles.gender_Icone} onClick={() => {
                            setSearchParams({
                                gender: "woman"
                            })
                        }} ><SlUserFemale />
                        </div>

                        <div style={searchParams.get("gender") === "man" ? { color: "blue" } : {}} className={styles.gender_Icone} onClick={() => {
                            setSearchParams({
                                gender: "man"
                            })
                        }}>
                            <SlUser />
                        </div>
                    </nav>
                    {searchParams.get("gender") === "man" && manCategory?.map((post) => {

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
                    {searchParams.get("gender") === "woman" &&
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

                </div>
                <div className={styles.subCategory_box_continer}>
                    {
                        searchParams.get("gender") === 'man' && manSubCategory.filter(({ type }) => {
                            return type === searchParams.get("category")
                        })?.map(({ id, name }) => {
                            return <div key={id} onClick={() => {
                                setSearchParams({
                                    gender: searchParams.get("gender"),
                                    category: searchParams.get("category"),
                                    subCategory: name
                                })

                            }} style={searchParams.get("subCategory") === name ? { borderBottom: " 6.5px solid #0008C1" } : {}} className={styles.subCategory_box}>
                                {name}
                            </div>
                        })
                    }
                    {
                        searchParams.get("gender") === 'woman' && womanSubCategory.filter(({ type }) => {
                            return type === searchParams.get("category")
                        })?.map(({ id, name }) => {
                            return <div key={id} onClick={() => {

                                setSearchParams({
                                    gender: searchParams.get("gender"),
                                    category: searchParams.get("category"),
                                    subCategory: name

                                })
                            }} style={searchParams.get("subCategory") === name ? { borderBottom: " 6.5px solid #0008C1" } : null} className={styles.subCategory_box} >
                                {name}
                                {/* <hr className={styles.border}/> */}
                            </div>
                        })
                    }
                </div>
                <div className={styles.addProductSection}>
                    <div className={styles.addProductSectionImgContiner}>
                        {
                            !file
                                ?
                                <label className={styles.addPhoto}>
                                    <input type={"file"} className={styles.addPhotoInput} onChange={handleChange} />
                                    <RiImageAddLine className={styles.iconPhoto} />
                                    <p className={styles.inputBoxText}>
                                        Загрузить<br />Фото
                                    </p>
                                </label>
                                :
                                <div className={styles.imgBox}><img className={styles.img} src={file} alt={"aaa"} /></div>
                        }
                        <div className={styles.miniImgContiner}>
                            {
                                !file1
                                    ?
                                    <label className={styles.addPhotoMini}>
                                        <input type={"file"} className={styles.addPhotoInput} onChange={handleChange1} />
                                        <RiImageAddLine className={styles.iconPhotoMini} />
                                    </label>
                                    :
                                    <div className={styles.imgBox}>
                                        <img className={styles.img} src={file1} alt={"aaa"} />
                                    </div>
                            }
                            {
                                !file2
                                    ?
                                    <label className={styles.addPhotoMini}>
                                        <input type={"file"} className={styles.addPhotoInput} onChange={handleChange2} />
                                        <RiImageAddLine className={styles.iconPhotoMini} />
                                    </label>
                                    :
                                    <div className={styles.imgBox}>
                                        <img className={styles.img} src={file2} alt={"aaa"} />
                                    </div>
                            }
                            {
                                !file3
                                    ?
                                    <label className={styles.addPhotoMini}>
                                        <input type={"file"} className={styles.addPhotoInput} onChange={handleChange3} />
                                        <RiImageAddLine className={styles.iconPhotoMini} />
                                    </label>
                                    :
                                    <div className={styles.imgBox}>
                                        <img className={styles.img} src={file3} alt={"aaa"} />
                                    </div>
                            }
                            {
                                !file4
                                    ?
                                    <label className={styles.addPhotoMini}>
                                        <input type={"file"} className={styles.addPhotoInput} onChange={handleChange4} />
                                        <RiImageAddLine className={styles.iconPhotoMini} />
                                    </label>
                                    :
                                    <div className={styles.imgBox}>
                                        <img className={styles.img} src={file4} alt={"aaa"} />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className={styles.inputContiner}>
                        <label className={styles.productName}>
                            Артикул
                            <input className={styles.productinputSection} type="text" onChange={(e) => {
                                setNameInput(e.target.value)
                            }} />
                        </label>
                        <label className={styles.productPrice}>
                            Цена
                            <input className={styles.productinputSection} type="number" onChange={(e) => {
                                setPriceInput(e.target.value)
                            }} />
                        </label>
                    </div>
                </div>
                <div className={styles.addProductButton}>
                    <button onClick={() => {
                        addProduct(file, nameInput, priceInput, searchParams.get('gender'), searchParams.get('subCategory'))
                        setAddProductCompOpen(false)
                    }}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal