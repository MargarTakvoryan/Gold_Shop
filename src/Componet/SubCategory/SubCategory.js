import React, { useState } from 'react'
import styles from './SubCategory.module.css'
import { useSearchParams } from 'react-router-dom'
import ManSub_Category from './ManSub_Category/ManSub_Category'
import WomanSub_Category from './WomanSub_Category/WomanSub_Category'
import AddSub_CategoryModal from '../Modals/AddSub_Category/AddSub_CategoryModal'
import { AiOutlinePlus } from 'react-icons/ai';

function SubCategory({ manSubCategory ,womanSubCategory }) {
    const [open,setOpen] = useState(false)
    // const [boxId, setBoxId] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div className={styles.subCategory_continer}>
            <div className={styles.subCategory_box_continer}>
                {
                    searchParams.get("man") === "man" && <ManSub_Category manSubCategory={manSubCategory} />
                }
                {
                    searchParams.get("woman") === "woman" && <WomanSub_Category womanSubCategory={womanSubCategory} />
                }
                <div className={styles.addSub_Category_Continer} onClick={()=>{
                    setOpen(true)
                }}>
                    <AiOutlinePlus/>
                </div>
                {/*  */}
            </div>
            {/* <hr className={styles.border} />  */}
            {open && <AddSub_CategoryModal setOpen={setOpen}/>}
        </div>
    )
}

export default SubCategory