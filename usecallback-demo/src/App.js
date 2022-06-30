import React, { useState, useCallback } from 'react';

const Item = ({ text }) => {
    return <li>{text}</li>;
}

const List = ({ funcaoQualquer }) => {
    return (
        <>
            <ul>
                {Array.from(Array(20), (el, index) => <Item text={`${index}`} />)}
            </ul>
        </>
    );
};

function App() {
	const [message, setMessage] = useState('');

	return (
		<>
			<input value={message} onChange={e => setMessage(e.target.value)} />
        	<button onClick={() => alert(message)}>Botão</button>
			<List />
		</>
	);
}

export default App;
