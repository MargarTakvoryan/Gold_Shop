import React, { useState } from 'react'
import styles from './SubCategory.module.css'
import { useSearchParams } from 'react-router-dom'
import ManSub_Category from './ManSub_Category/ManSub_Category'
import WomanSub_Category from './WomanSub_Category/WomanSub_Category'
import AddSub_CategoryModal from '../Modals/AddSub_Category/AddSub_CategoryModal'
import { AiOutlinePlus } from 'react-icons/ai';

function SubCategory({editManSubCategory,deleteWomanSubCategory,deleteManSubCategory, manSubCategory, womanSubCategory, addWomanSubCategory, addManSubCategory }) {
    const [open, setOpen] = useState(false)
    // const [boxId, setBoxId] = useState(0)
    const [searchParams] = useSearchParams()

    return (
        <div className={styles.subCategory_continer}>
            <div className={styles.subCategory_box_continer}>
                {
                    searchParams.get("gender") === 'man' && <ManSub_Category editManSubCategory={editManSubCategory} deleteManSubCategory={deleteManSubCategory} manSubCategory={manSubCategory} />
                }
                {
                    searchParams.get("gender") === 'woman' && <WomanSub_Category deleteWomanSubCategory={deleteWomanSubCategory} womanSubCategory={womanSubCategory} />
                }

                {
                    searchParams.get('category') && <div className={styles.addSub_Category_Continer} onClick={() => {
                        setOpen(true)
                    }}>
                        <AiOutlinePlus />
                    </div>
                }

            </div>
            {/* {searchParams.get('category') && <hr className={styles.border} /> } */}
            {open && <AddSub_CategoryModal setOpen={setOpen} addWomanSubCategory={addWomanSubCategory} addManSubCategory={addManSubCategory} />}
        </div>
    )
}

export default SubCategory