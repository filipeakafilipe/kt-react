import React, { useState } from 'react';
import Item from './Item';

const Message = () => {
    const [message, setMessage] = useState('');

    return (<>
        <input value={message} onChange={e => setMessage(e.target.value)} />
        <button onClick={() => alert(message)}>Adicionar Mensagem</button>
    </>);
};

const List = () => {
    let itens = [];

    for (let index = 0; index < 50; index++) {
        itens.push(<Item text={`${index}`} />)
    }

    return (
        <>
            <Message />
            <ul>
                {Array.from(Array(50), (el, index) => <Item text={`${index}`} />)}
            </ul>
        </>
    );
}

export default List;