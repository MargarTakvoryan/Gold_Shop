import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import styles from './Product.module.css'
import { useSearchParams } from 'react-router-dom';

function Product({ product ,deleteProdcut}) {
  const [searchParams] = useSearchParams()
  return (
    <div className={styles.productContiner}>
      {
        product.filter(({ genderType, subCategoryType }) => {
          return genderType === searchParams.get("gender") && subCategoryType === searchParams.get("subCategory")
        })?.map(({ id, name, price, porductImgUrl }) => {
          return (
            <div key={id} className={styles.productBox} >
              <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
              <div className={styles.namePriceBox}>
                <p>{name}</p>
                <p className={styles.price}>{price}</p>
              </div>
              <div className={styles.hoverBox}>
                <BsThreeDotsVertical />
                <div className={styles.editDeletContiner} >
                  <div className={styles.iconeBox}>
                    Edit
                    <CiEdit />
                  </div>
                  <div className={styles.iconeBox} onClick={() => {
                   deleteProdcut(id)
                  }}>
                    Delete
                    <AiFillDelete />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      {searchParams.get("search") ?
        product.filter(({ subCategoryType, name }) => {
          // return searchParams.get('search') === '' ? subCategoryType : subCategoryType.toLocaleLowerCase().includes(searchParams.get("search")) || searchParams.get('search').toLocaleUpperCase()  === '' ? subCategoryType : subCategoryType.toLocaleUpperCase().includes(searchParams.get("search")) || subCategoryType.toLocaleLowerCase() === searchParams.get("search").toLocaleLowerCase() || searchParams.get("search") === name || searchParams.get("search").toLocaleLowerCase() === "" ? name : name.toLocaleLowerCase().includes(searchParams.get("search")) || searchParams.get("search").toLocaleUpperCase() === "" ? name : name.toLocaleUpperCase().includes(searchParams.get("search"))
          // return searchParams.get('search').toLocaleLowerCase() === '' ? subCategoryType : subCategoryType.toLocaleLowerCase().includes(searchParams.get("search")) || searchParams.get('search').toLocaleUpperCase() === '' ? subCategoryType : subCategoryType.toLocaleUpperCase().includes(searchParams.get("search")) || searchParams.get("serach").toLocaleLowerCase() === '' ? name : name.toLocaleLowerCase().includes(searchParams.get("search")) ||
          return (
            searchParams.get('search').toLocaleLowerCase() === '' ? subCategoryType : subCategoryType.toLocaleLowerCase().includes(searchParams.get("search"))
              ||
              searchParams.get('search').toLocaleUpperCase() === '' ? subCategoryType : subCategoryType.toLocaleUpperCase().includes(searchParams.get("search"))
                ||
                searchParams.get('search').toLocaleUpperCase() === '' ? name : name.toLocaleUpperCase().includes(searchParams.get("search"))
                  ||
                  searchParams.get('search').toLocaleLowerCase() === '' ? name : name.toLocaleLowerCase().includes(searchParams.get("search"))
          )
        })?.map(({ id, name, price, porductImgUrl }) => {
          return (
            <div key={id} className={styles.productBox} >
              <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
              <div className={styles.namePriceBox}>
                <p>{name}</p>
                <p className={styles.price}>{price}</p>
              </div>
            </div>)
        }) : null
      }
    </div>
  )
}

export default Product