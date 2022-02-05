import styles from './css/List.module.css';
import ListItem from '../ListItem/ListItem';

function List({removeItem, getItems, handleComplete, getCategory}) {
    const items = getItems(getCategory());
    return (
        <ul className={styles.todoList}>
            {items.map((item) => {
                return (
                    <ListItem 
                        key={item.id} 
                        itemName={item.text} 
                        complete={item.completed} 
                        removeItem={removeItem} 
                        handleComplete={handleComplete}
                    />
                )
            })}
        </ul>
    )
}

export default List;