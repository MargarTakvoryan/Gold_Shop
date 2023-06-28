import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import styles from './Gender.module.css'
import Woman from './Woman/Woman';
import Man from './Man/Man';

function Gender({womanCategory, manCategory ,addManCategory,addWomanCategory}) {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("woman") );
    // console.log(searchParams);
    // const personFixStyle = {
    //     // height:"32px",
    //     // width:"50px",
    //     // display:"flex",
    //     // justifyContent:"center",
    //     // alignItems:"center",
    //     color: "#0008C1",
    //     boxShadow: "0px 0px 10px rgba(11, 14, 173, 0.25)",
    //     borderRadius: "10px",
    // }
    return (
        <div>
            <div className={styles.gender_Continer}>
                <nav className={styles.gender_box}>
                    <div className={styles.gender_Icone} onClick={() => {
                        setSearchParams({
                            woman: "woman"
                        })
                    }} ><SlUserFemale />
                    </div>

                    <div className={styles.gender_Icone} onClick={() => {
                        setSearchParams({
                            man: "man"
                        })
                    }}>
                        <SlUser />
                    </div>
                </nav>
                {searchParams.get("man") === "man" && <Man manCategory={manCategory} addManCategory={addManCategory} />}
                {searchParams.get("woman") === "woman" && <Woman womanCategory={womanCategory} addWomanCategory={addWomanCategory} />}
            </div>

        </div>
    )
}

export default Gender