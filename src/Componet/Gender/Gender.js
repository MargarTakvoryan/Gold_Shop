import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import styles from './Gender.module.css'
import Woman from './Woman/Woman';
import Man from './Man/Man';
import { AiOutlinePlus } from 'react-icons/ai';
import AddProductModal from '../Modals/AddProductModal/AddProductModal';
import { BiFilterAlt } from 'react-icons/bi';
import FilterModal from '../Modals/FilterModal/FilterModal';

function Gender({editWomanCategory, filterPriceFunc, editManCategory, deleteWomanCategory, deleteManCategory, addProduct, womanCategory, manSubCategory, womanSubCategory, manCategory, addManCategory, addWomanCategory }) {
    const [addProductCompOpen, setAddProductCompOpen] = useState(false)
    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()


    return (
        <div>
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
                {searchParams.get("gender") === "man" && <Man editManCategory={editManCategory} deleteManCategory={deleteManCategory} manCategory={manCategory} addManCategory={addManCategory} />}
                {searchParams.get("gender") === "woman" && <Woman editWomanCategory={editWomanCategory} deleteWomanCategory={deleteWomanCategory} womanCategory={womanCategory} addWomanCategory={addWomanCategory} />}
            </div>
            {
                searchParams.get("subCategory") && <div className={styles.prodcutAddButton} onClick={() => {
                    setAddProductCompOpen(true)
                }}>
                    <AiOutlinePlus />
                </div>
            }
            {searchParams.get("subCategory") &&
                <div className={styles.filterContiner} onClick={() => {
                    setFilterModalOpen(true)
                }}>
                    <div>
                        <BiFilterAlt />
                    </div>
                    <p className={styles.filterText}>
                        Ф<br />и<br />л<br />ь<br />т<br />р
                    </p>
                </div>}
            {addProductCompOpen && <AddProductModal addProduct={addProduct} womanSubCategory={womanSubCategory} manSubCategory={manSubCategory} manCategory={manCategory} womanCategory={womanCategory} setAddProductCompOpen={setAddProductCompOpen} />}
            {filterModalOpen && <FilterModal filterPriceFunc={filterPriceFunc} setFilterModalOpen={setFilterModalOpen} />}
        </div>
    )
}

export default Gender