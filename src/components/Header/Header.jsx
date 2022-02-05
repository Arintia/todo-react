import Form from '../Form/Form';

function Header({addItem}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <Form addItem={addItem}/>
        </header>
    )
}

export default Header;