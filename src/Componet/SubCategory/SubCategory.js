import React, { useState } from 'react'
import styles from './SubCategory.module.css'
import { useSearchParams } from 'react-router-dom'

function SubCategory({manSubCategory}) {
    const [boxId, setBoxId] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <div className={styles.subCategory_continer}>
            <div className={styles.subCategory_box_continer}>
                {
                    manSubCategory.sub_Category?.map(({ id, name }) => {
                        return <div onClick={() => {
                            setBoxId(id)
                        }}
                            style={boxId === id ? { borderBottom: " 6.5px solid #0008C1" } : null}
                            className={styles.subCategory_box} key={id}>
                            {name}
                        </div>
                    })
                }
            </div>

            {/* <hr className={styles.border} /> */}

        </div>
    )
}

export default SubCategory