import React, { useState } from 'react';

const Item = ({ text }) => {
    return <li>{text}</li>;
}

const List = () => {
    const [message, setMessage] = useState('');

    let itens = [];

    for (let index = 0; index < 50; index++) {
        itens.push(<Item text={`${index}`} />)
    }

    return (
        <>
            <input value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={() => alert(message)}>Adicionar Mensagem</button>
            <ul>
                {Array.from(Array(50), (el, index) => <Item text={`${index}`} />)}
            </ul>
        </>
    );
}

function App() {
	return (
		<>
			<List />
		</>
	);
}

export default App;
