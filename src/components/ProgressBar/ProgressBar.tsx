import React, { useEffect, useRef } from 'react';
import './ProgressBar.css';

interface Props {
    text: string;
    value: number;
}

export const ProgressBar: React.FC<Props> = ({ text, value }) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const unitsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const progressBarWidth = progressBarRef.current?.clientWidth || 0;
        const unitsWidth = unitsRef.current?.clientWidth || 0;
        const maxWidth = progressBarWidth - unitsWidth;

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
            <label className="label" htmlFor="">
                {text}
            </label>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${value}%`, backgroundColor: '#F9C600' }}
                    ref={progressBarRef}></div>
            </div>
            <span className="units" ref={unitsRef}>
                {value} {unitsText}
            </span>
        </div>
    );
};
