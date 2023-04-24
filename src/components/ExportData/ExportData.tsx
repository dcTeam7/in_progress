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

  onClick?: (b : boolean) => void;
}

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
