import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { useSearchParams } from 'react-router-dom'
import styles from './ManSub_Category.module.css'
import { useState } from 'react';
import EditManSubCategory from '../../Modals/EditManSubCategory/EditManSubCategory';

function ManSub_Category({editManSubCategory, deleteManSubCategory, manSubCategory }) {
    const [editManSubModalOpen, setEditManSubModalOpen] = useState(false)
    const [filterId,setFilterId] = useState() 
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            {
                manSubCategory.filter(({ type }) => {
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
                        <div className={styles.hoverBox} onClick={() => {
                            
                        }}>
                            <BsThreeDotsVertical />
                            <div className={styles.editDeletContiner} >
                                <div className={styles.iconeBox} onClick={() => {
                                    setEditManSubModalOpen(true)
                                    setFilterId(id)
                                }}>
                                    Edit
                                    <CiEdit />
                                </div>
                                <div className={styles.iconeBox} onClick={() => {
                                    deleteManSubCategory(id)
                                }}>
                                    Delete
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>

                    </div>

                })
            }
            {editManSubModalOpen && <EditManSubCategory editManSubCategory={editManSubCategory} filterId={filterId} setEditManSubModalOpen={setEditManSubModalOpen} />}
        </>
    )
}

export default ManSub_Category