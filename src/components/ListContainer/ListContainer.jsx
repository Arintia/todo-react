import { useState } from 'react';
import styles from './css/ListContainer.module.css';
import List from '../List/List';
import ListFooter from '../ListFooter/ListFooter';

function ListContainer({removeItem, getItems, handleComplete, getCategory, setCategoryName}) { 
    const items = getItems(getCategory()); // kategoriye göre itemelrin render edilmesi için App.jsx'de tanımladığım fonksiyon
    return (
        <section className={styles.main}>
		    <input className={styles.toggleAll} type="checkbox"/>
            <label htmlFor={styles.toggleAll}>
			    Mark all as complete
		    </label>

            <List removeItem={removeItem} getItems={getItems} handleComplete={handleComplete} getCategory={getCategory}/>
            <ListFooter items={items} removeItem={removeItem} setCategoryName={setCategoryName} getCategory={getCategory}/>
	    </section>
    )
}

export default ListContainer;
