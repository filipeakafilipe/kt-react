import React, { useState, useMemo } from 'react';

export const UmComponente = () => {
    const [estadoParaAtualizarSomenteOComponente, setEstadoParaAtualizarSomenteOComponente] = useState(false);
    const funcaoParaAtualizarSomenteOComponente = () => {
        setEstadoParaAtualizarSomenteOComponente(prevState => !prevState);
    }

    const [estadoParaAtualizarOComponenteEValorComplexo, setEstadoParaAtualizarOComponenteEValorComplexo] = useState(false);
    const funcaoParaAtualizarOComponenteEValorComplexo = () => {
        setEstadoParaAtualizarOComponenteEValorComplexo(prevState => !prevState);
    }
    
    const funcaoComputacionalmentePesada = () => {
        var start = new Date().getTime();
        var end = 0;
        while((end-start) < 2000){
            end = new Date().getTime();
        }

        return Math.floor(Math.random() * 101);
    }

    const umValorComplexo = useMemo(() => {
        return funcaoComputacionalmentePesada();
    }, [estadoParaAtualizarOComponenteEValorComplexo]);

    return (
        <>
            <button onClick={() => funcaoParaAtualizarOComponenteEValorComplexo()}>Atualizar o Componente e Valor Complexo</button>
            <button onClick={() => funcaoParaAtualizarSomenteOComponente()}>Atualizar Somente o Componente</button>
            <div>{umValorComplexo}</div>
        </>
    )
}


function App() {
	return (
		<>
			<UmComponente />
		</>
	);
}

export default App;
