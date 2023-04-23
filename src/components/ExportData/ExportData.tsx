import React from 'react';
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
   * Html for do label
   */
  htmlFor: string,

  onClick?: () => void;
}

export function ExportData(props: ExportDataProps) {

  function ExportCSV() { }

  return (
    <>
      <button onClick={ExportCSV} className={style.styleExportData}>
        <img src={exportIcon} alt="Export CSV" />
        <label htmlFor={props.htmlFor}>{props.text}</label>
      </button>
    </>
  )
}
