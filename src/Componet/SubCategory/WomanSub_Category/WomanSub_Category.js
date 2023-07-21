import { useSearchParams } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import styles from './WomanSub_Category.module.css'

function WomanSub_Category({ deleteWomanSubCategory, womanSubCategory }) {

    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            {
                womanSubCategory.filter(({ type }) => {
                    return type === searchParams.get("category")
                })?.map(({ id, name }) => {
                    return <div key={id} onClick={() => {

                        setSearchParams({
                            gender: searchParams.get("gender"),
                            category: searchParams.get("category"),
                            subCategory: name

                        })
                    }} style={searchParams.get('subCategory') === name ? { borderBottom: " 6.5px solid #0008C1" } : null} className={styles.subCategory_box} >
                        {name}
                        <div className={styles.hoverBox}>
                            <BsThreeDotsVertical />
                            <div className={styles.editDeletContiner} >
                                <div className={styles.iconeBox}>
                                    Edit
                                    <CiEdit />
                                </div>
                                <div className={styles.iconeBox} onClick={() => {
                                    deleteWomanSubCategory(id)
                                }}>
                                    Delete
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default WomanSub_Category