import { useState } from 'react';
import moment from 'moment';

export const useHorario = (format) => {
    const [horario, setHorario] = useState(moment().format(format));

    const atualizarHorario = () => {
        setHorario(moment().format(format));
    };

    setInterval(atualizarHorario, 1000);

    return horario;
}
