import React, { ButtonHTMLAttributes, useState } from 'react';
import less from '../../assets/icons/expand_less.svg'
import more from '../../assets/icons/expand_more.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SortButton({ children, ...props }: ButtonProps) {

  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(false);
    if (props.onClick) {
      setClicked(true);
    }
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}
      {clicked ? <img src={less}/> : <img src={more}/>}
    </button>
  );
}


