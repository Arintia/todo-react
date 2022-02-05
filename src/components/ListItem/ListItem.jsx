import { useState } from 'react';
import styles from '../List/css/List.module.css';

function ListItem({itemName, complete, removeItem, handleComplete}) {
    const [itemComplete, setComplete] = useState(complete);
    let listElement;
    if(itemComplete) listElement = `${styles.completed}`; 
    else listElement = '';
    return (
    <>
        <li className={listElement}>
            <div className={styles.view}>
                <input 
                    className={styles.toggle} 
                    type="checkbox" 
                    onChange={() => 
                        {
                            setComplete(!itemComplete);
                            handleComplete(itemName);
                        }
                    } 
                    defaultChecked={itemComplete}
                />
                <label>{itemName}</label>
                <button className={styles.destroy} onClick={() => removeItem(itemName)}></button>
            </div>
        </li>
    </>
    )
}

export default ListItem;