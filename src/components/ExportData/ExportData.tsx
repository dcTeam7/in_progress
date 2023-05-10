import React, { useState } from 'react';
import exportIcon from './exportIcon.svg';
import './ExportData.css'

const style = {
  styleExportData: 'ExportDataClass'
}

interface ExportDataProps {
  /**
   *  Texto do botão
   */
  text: string,
  /**
   * Informa o estado do botão
   */
  stateBtn?: boolean,
  /**
   * Html for do label
   */
  htmlFor: string,
  /**
   * Função onclick que aciona um callback
   * @param b 
   * @returns void
   */
  onClick?: (b : boolean) => void;
}
/**
 * Componente primário da interface do usuário para interação do usuário
 * @param props 
 * @returns button com propriedades dinâmicas.
 */
export function ExportData(props: ExportDataProps) {

  const [clicked, setClicked] = useState(props.stateBtn);

  function ExportCSV() {
    setClicked(!clicked)
    if(props.onClick) {
      props.onClick(!clicked)
    }
  }

  return (
    <>
      <button onClick={ExportCSV} className={style.styleExportData}>
        <img src={exportIcon} alt="Export CSV" />
        <label htmlFor={props.htmlFor}>{props.text}</label>
      </button>
    </>
  )
}
