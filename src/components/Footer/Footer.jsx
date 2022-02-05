import styles from './css/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.info}>
	        <p>Click to edit a todo</p>
	        <p>Created by <a href="https://github.com/Arintia">Yiğit Atak</a></p>
	        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    )
}

export default Footer;