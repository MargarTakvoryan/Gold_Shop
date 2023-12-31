import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import styles from './Product.module.css'
import { useSearchParams } from 'react-router-dom';
import EditProduct from '../Modals/EditProduct/EditProduct';

function Product({ valuePrice, editProduct, product, deleteProdcut ,setIsLoading}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [filterId, setFilterId] = useState(0)
  const [searchParams] = useSearchParams()
  console.log(valuePrice[0]);
  return (
    <div className={styles.productContiner}>
      { !valuePrice ?
        product.filter(({ genderType, subCategoryType }) => {
          return genderType === searchParams.get("gender") && subCategoryType === searchParams.get("subCategory")
        })?.map(({ id, name, price, porductImgUrl }) => {
          return (
            <div key={id} className={styles.productBox} onClick={(e) => {


            }}>
              <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
              <div className={styles.namePriceBox}>
                <p>{name}</p>
                <p className={styles.price}>{price}$</p>
              </div>
              <div className={styles.hoverBox}>
                <BsThreeDotsVertical />
                <div className={styles.editDeletContiner} >
                  <div className={styles.iconeBox} onClick={() => {
                    setFilterId(id)
                    setModalOpen(true)

                  }}>
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
        }):null
      }
      {
        searchParams.get("search")
          ?
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
              <div key={id} className={styles.productBox} onClick={() => {
                setModalOpen(true)
              }}>
                <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
                <div className={styles.namePriceBox}>
                  <p>{name}</p>
                  <p className={styles.price}>{price}$</p>
                </div>
                <div className={styles.hoverBox}>
                  <BsThreeDotsVertical />
                  <div className={styles.editDeletContiner} >
                    <div className={styles.iconeBox} onClick={() => {
                      setFilterId(id)
                    }}>
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
              </div>)
          }) : null

      }
      {/* {
        searchParams.get('search') === undefined ?
          product?.map(({ id, name, price, porductImgUrl }) => {
            return (
              <div key={id} className={styles.productBox} >
                <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
                <div className={styles.namePriceBox}>
                  <p>{name}</p>
                  <p className={styles.price}>{price}</p>
                </div>
              </div>)
          }) : null
      } */}

      {/* {
        
        product?.map(({ id, name, price, porductImgUrl }) => {
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
      } */}
      {
        !!valuePrice === true ?
        product.filter(({ price, genderType, subCategoryType }) => {
          if (valuePrice[0] && valuePrice[1]) {
            const minPrice = parseFloat(valuePrice[0]);
            const maxPrice = parseFloat(valuePrice[1]);
            const productPrice = parseFloat(price);
            return productPrice >= minPrice && productPrice <= maxPrice && genderType === searchParams.get("gender") && subCategoryType === searchParams.get("subCategory")
          }
          return true  && genderType === searchParams.get("gender") && subCategoryType === searchParams.get("subCategory") ;
        })
        ?.map(({ id, name, price, porductImgUrl }) => {
          return (
            <div key={id} className={styles.productBox} onClick={(e) => {


            }}>
              <img src={porductImgUrl} alt='productImg' className={styles.imgProduct} />
              <div className={styles.namePriceBox}>
                <p>{name}</p>
                <p className={styles.price}>{price}$</p>
              </div>
              <div className={styles.hoverBox}>
                <BsThreeDotsVertical />
                <div className={styles.editDeletContiner} >
                  <div className={styles.iconeBox} onClick={() => {
                    setFilterId(id)
                    setModalOpen(true)

                  }}>
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
        }) : null
      }

      {modalOpen && <EditProduct setIsLoading={setIsLoading} editProduct={editProduct} setModalOpen={setModalOpen} filterId={filterId} />}
    </div>
  )
}

export default Product