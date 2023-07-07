import React, { useState } from 'react'
import styles from './FilterModal.module.css'

function FilterModal({ setFilterModalOpen }) {
  const [rangeOne,setRangeOne] = useState(0)
  console.log(rangeOne);

  return (
    <div className={styles.filterModal} onClick={() => {
      setFilterModalOpen(false)
    }}>
      <form className={styles.filterModalContiner} onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}>
        <input type={'range'} value={rangeOne} max={100}  min={0} onChange={(e)=>{
          setRangeOne(e.target.value)
        }}/>
      </form>
    </div>
  )
}

export default FilterModal