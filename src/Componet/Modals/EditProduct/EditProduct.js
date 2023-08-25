import React, { useEffect, useState } from 'react'
import { RiImageAddLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './EditProduct.module.css'
import axios from 'axios'

function EditProduct({ editProduct, setModalOpen, filterId ,setIsLoading}) {
    const [product, setProduct] = useState({
        porductImgUrl: "",
        name: "",
        price: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:3000/product/${filterId}`)
            .then((response) => {
                setProduct(response.data)
            })
           .catch(()=>{

           })
    }, [filterId])

    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        setProduct({ ...product, porductImgUrl: URL.createObjectURL(e.target.files[0]) })
    }
    return (
        <div className={styles.addProductModal} onClick={() => {
            setModalOpen(false)
        }}>
            <div className={styles.addProductContiner} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={styles.title}>
                    <h3>Редактировать</h3>
                    <AiOutlineClose style={{ cursor: "pointer" }} onClick={() => {
                        setModalOpen(false)
                    }} />
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

                    </div>
                    <div className={styles.inputContiner}>
                        <label className={styles.productName}>
                            Артикул
                            <input className={styles.productinputSection} value={product.name} type="text" onChange={(e) => {
                                setProduct({ ...product, name: e.target.value   })
                            }} />
                        </label>
                        <label className={styles.productPrice}>
                            Цена
                            <input className={styles.productinputSection} value={product.price} type="number" onChange={(e) => {
                                setProduct({ ...product, price: e.target.value })
                            }} />
                        </label>
                    </div>
                </div>
                <div className={styles.addProductButton}>
                    <button onClick={() => {
                        setIsLoading(true)
                        setModalOpen(false)
                        editProduct(filterId,product)
                    }}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct