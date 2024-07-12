import { useState } from 'react';
import styles from '../../src/styles/ToggleSwitch.module.css';

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    }
    return (
        <div className="flex flex-row mt-2">
            <div>
                <label className={styles.switch}>
                    <input type="checkbox" checked={isOn} onChange={handleToggle} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </div>
            <div className=''>
                <text className="mt-2 ml-2 text-black text-xs text-center">{isOn ? 'On' : 'Off'}</text>
            </div>
        </div>
    );
}