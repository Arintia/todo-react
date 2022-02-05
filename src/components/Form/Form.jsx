import { useState } from 'react';
import styles from './css/Form.module.css';

function Form({addItem}) {
    const [input, setInput] = useState("");
    return (
        <form onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if(!input || input === ' ') {
                alert("You cannot leave this area empty!");
                return false;
            }  
            addItem(input);
            setInput('');
        }}>
            <input className={styles.newTodo} placeholder="What needs to be done?" value={input} onInput={(e) => setInput(e.target.value)} autoFocus/>
        </form>
    )
}

export default Form;