import React, { useEffect, useRef, useState } from 'react';
import './ProgressBar.css';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

interface Props {
    /**
     * Texto a ser exibido que faz referência a barra
     */
    text: string;
    /**
     * Valor dinâmico passado do progresso
     */
    value: number;
}

/**
 * Componente capaz de renderizar uma barra de progresso do aluno
 */
export const ProgressBar: React.FC<Props> = ({ text, value = 50}) => {



    const progressBarRef = useRef<HTMLDivElement>(null);
    const unitsRef = useRef<HTMLSpanElement>(null);
    const [crown, setcrown] = useState(false)

    useEffect(() => {
        const progressBarWidth = progressBarRef.current?.clientWidth || 0;
        const unitsWidth = unitsRef.current?.clientWidth || 0;
        const maxWidth = progressBarWidth - unitsWidth;

        if (value >= 100) {
            setcrown(true)
        } else {
            setcrown(false)
        }

        if (value > 0 && maxWidth > 0) {
            const fillWidth = Math.min((value / 100) * maxWidth, maxWidth);
            progressBarRef.current!.style.width = `${fillWidth}px`;
        } else {
            progressBarRef.current!.style.width = '0';
        }
    }, [value]);

    let unitsText = '';
    if (value === 0) {
        unitsText = 'sem atividades';
    } else if (value === 1) {
        unitsText = 'unidade';
    } else {
        unitsText = 'unidades';
    }

    return (
        <div className="container">
            <div className='content-label'>
                <label className="label" htmlFor="">
                    {text}
                </label>
                {crown ? <MilitaryTechIcon style={{ color: '#f9c600' }} /> : ""}
            </div>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${value}%`, backgroundColor: '#F9C600' }}
                    ref={progressBarRef}></div>
                <span className="units" ref={unitsRef}>
                    {value} {unitsText}
                </span>
            </div>
        </div>
    );
};
