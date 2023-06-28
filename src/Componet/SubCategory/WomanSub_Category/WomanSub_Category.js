import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './WomanSub_Category.module.css'

function WomanSub_Category({ womanSubCategory }) {
    const [boxId, setBoxId] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            {
                womanSubCategory.filter(({ type, name }) => {
                    return type === searchParams.get("category")
                })?.map(({ id, name }) => {

                    return <div key={id} onClick={() => { setBoxId(id) }} style={boxId === id ? { borderBottom: " 6.5px solid #0008C1" } : null} className={styles.subCategory_box} >
                        {name}
                        {/* <hr className={styles.border}/> */}
                    </div>
                })
            }
        </>
    )
}

export default WomanSub_Category