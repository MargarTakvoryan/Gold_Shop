import { useSearchParams } from 'react-router-dom'
import styles from './WomanSub_Category.module.css'

function WomanSub_Category({ womanSubCategory }) {
    
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            {
                womanSubCategory.filter(({ type }) => {
                    return type === searchParams.get("category")
                })?.map(({ id, name }) => {
                    return <div key={id} onClick={() => {
                         
                         setSearchParams({
                            gender:searchParams.get("gender"),
                            category:searchParams.get("category"),
                            subCategory:name
                            
                        })
                         }} style={searchParams.get('subCategory') === name ? { borderBottom: " 6.5px solid #0008C1" } : null} className={styles.subCategory_box} >
                        {name}
                        {/* <hr className={styles.border}/> */}
                    </div>
                })
            }
        </>
    )
}

export default WomanSub_Category