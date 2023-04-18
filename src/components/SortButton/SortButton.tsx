import { useState } from 'react';
import './SortButton.css'
import less from '../../assets/icons/expand_less.svg'
import more from '../../assets/icons/expand_more.svg'

const style = {
  styleSortBtn: 'SortButtonClass'
}

interface ButtonProps {
  /**
   *  Texto do botão
   */
  text: string,
  /**
   * Informa o estado do botal
   */
  stateBtn?: boolean,
  /**
   * Typo do botão
   */
  type: 'submit' | 'button' | 'reset'
  /**
   * Click Handler do botão
   */
  onClick?: (b : boolean) => void;
}

export function SortButton(props: ButtonProps) {

  const [clicked, setClicked] = useState(props.stateBtn);

  function handleClick() {
    setClicked(!clicked)
    if(props.onClick) {
      props.onClick(!clicked)
    }
  }

  return (
    <button 
    className={style.styleSortBtn} 
    onClick={handleClick}
    type={props.type}>
      {props.text}
      {clicked ? <img src={less}/> : <img src={more}/>}
    </button>
  );
}