import React from 'react';
import styles from './FilterModal.module.css'
import { Slider } from '@mui/material';
import { useState } from 'react';
function FilterModal({ setFilterModalOpen }) {
  const [rangeValue,setRangeValue] = useState([0,12000])
 
  return (
    <div className={styles.filterModal} onClick={() => {
      setFilterModalOpen(false)
    }}>
      <div className={styles.filterModalContiner} onClick={(e) => {
        e.stopPropagation()
      }}>
        <Slider
          // getAriaLabel={() => 'Temperature range'}
          value={rangeValue}
          onChange={(e)=>{
            setRangeValue(e.target.value)
          }}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          // max={12000}
          // min={0}
        />
      </div>
    </div>

  );
}
export default FilterModal;