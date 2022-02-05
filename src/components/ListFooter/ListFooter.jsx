import styles from './css/ListFooter.module.css';

function ListFooter({items, removeItem, setCategoryName, getCategory}) {
    const itemsLeft = items.filter(item => item.completed === false).length; // completed'ı false olan itemleri içeren arrayin lengthi
    return (
        <footer className={styles.footer}>
            <span className={styles.todoCount}>
                <strong>{itemsLeft}</strong> items left
            </span>
            <ul className={styles.filters}>
                <li>
                    <a 
                        onClick={() => setCategoryName("All")} 
                        className={getCategory() === "All" && styles.selected}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a 
                        onClick={() => setCategoryName("Active")}  
                        className={getCategory() === "Active" && styles.selected}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a 
                        onClick={() => setCategoryName("Completed")}  
                        className={getCategory() === "Completed" && styles.selected}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className={styles.clearCompleted} onClick={() => removeItem("", true)}>
                Clear completed
            </button>
	    </footer>
    ) 
}

export default ListFooter;