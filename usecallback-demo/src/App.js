import React, { useState, useCallback } from 'react';

const Item = ({ text }) => {
    return <li>{text}</li>;
}

const List = React.memo(({ funcaoQualquer }) => {
    return (
        <>
            <ul>
                {Array.from(Array(20), (el, index) => <Item text={`${index}`} />)}
            </ul>
        </>
    );
});

function App() {
	const [message, setMessage] = useState('');

	const funcaoQualquer = useCallback(() => {
		alert('Teste');
	}, []);

	return (
		<>
			<input value={message} onChange={e => setMessage(e.target.value)} />
        	<button onClick={() => alert(message)}>Botão</button>
			<List funcaoQualquer={funcaoQualquer} />
		</>
	);
}

export default App;
