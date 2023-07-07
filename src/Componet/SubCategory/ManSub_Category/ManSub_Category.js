import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './ManSub_Category.module.css'

function ManSub_Category({ manSubCategory }) {
    const [boxId, setBoxId] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    return (

        <>
            {
                manSubCategory.filter(({ type }) => {
                    return type === searchParams.get("category")
                })?.map(({ id, name }) => {
                    return <div key={id} onClick={() => {
                        setSearchParams({
                            gender:searchParams.get("gender"),
                            category:searchParams.get("category"),
                            subCategory:name
                        })
                        setBoxId(id) 
                        }} style={searchParams.get("subCategory") === name ? { borderBottom: " 6.5px solid #0008C1" } : {}} className={styles.subCategory_box}>
                        {name}
                    </div>
                })
            }

        </>

    )
}

export default ManSub_Category