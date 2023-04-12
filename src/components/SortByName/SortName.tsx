import React from 'react'
import './SortName.css'

interface SortNameProps {
    listaAlunos: Array<Object>
    ordem: string,
}

export function SortName(props: SortNameProps) {
    
  return (
    <div className='sortItens'>
        <label htmlFor="name">Name</label>
        <i/>
    </div>
  )
}

