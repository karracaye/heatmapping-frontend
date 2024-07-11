import { useState } from 'react';
import styles from '../../src/styles/ToggleSwitch.module.css';

export default function ToggleSwitch(){
    const [isOn, setIsOn] = useState(false);
     const handleToggle =()=>{
         setIsOn(!isOn);
     }
    return (
        <div className="m-2 flex flex-row">
            <label className={styles.switch}>
                <input type="checkbox" checked={isOn} onChange={handleToggle} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <p className="mt-2 ml-2 text-black text-sm">{isOn ? 'On' : 'Off'}</p>
        </div>
    );
}