import React from 'react';
import styles from './FilterModal.module.css'
import { Slider } from '@mui/material';
import { useState } from 'react';

function FilterModal({ filterPriceFunc, setFilterModalOpen }) {
  const [value, setValue] = useState([0, 12000]);
  const [value2, setValue2] = useState([0, 12000]);

  return (
    <div className={styles.filterModal} onClick={() => {
      setFilterModalOpen(false)
    }}>
      <div className={styles.filterModalContiner} onClick={(e) => {
        e.stopPropagation()
      }}>
        <div className={styles.inputDateBox}>
          <input type='date' className={styles.inputDate} />
          <input type='date' className={styles.inputDate} />
        </div>
        <div className={styles.inputRangeBox} >
          <p className={styles.title}>Цена</p>
          <Slider
            className={styles.rangeSlider}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            valueLabelDisplay="auto"
            max={12000}
            min={0}
          />
          <div className={styles.inputRangeValue}>
            <input type='number' value={value[0]} className={styles.minValue} onChange={(e) => {
              setValue([e.target.value, value[1]])
            }} />
            -
            <input type='number' value={value[1]} className={styles.minValue} onChange={(e) => {
              setValue([value[0], e.target.value])
            }} />
          </div>

        </div>

        <div className={styles.inputRangeBox2}>
          <p className={styles.title}>Цена Производства</p>
          <Slider
            className={styles.rangeSlider}
            getAriaLabel={() => 'Temperature range'}
            value={value2}
            onChange={(e) => {
              setValue2(e.target.value)
            }}
            valueLabelDisplay="auto"
            max={12000}
            min={0}
          />
          <div className={styles.inputRangeValue}>
            <input type='number' value={value2[0]} className={styles.minValue} onChange={(e) => {
              setValue2([e.target.value, value2[1]])
            }} />
            -
            <input type='number' value={value2[1]} className={styles.minValue} onChange={(e) => {
              setValue2([value2[0], e.target.value])
            }} />
          </div>
        </div>
        <button onClick={() => {
          setFilterModalOpen(false)
          filterPriceFunc(value)
        }}>Сохранить</button>
      </div>
    </div>
  );
}
export default FilterModal;