import React from "react";
import s from './Indicator.module.scss';

export default ({completed}) => {
  
  const styleClass = function () {
    return completed ? 'completed' : 'uncompleted'
  }

  let className = `${s.indicator} ${s[`indicator__${styleClass()}`]}`

  return (
    <div className={className}>
      
    </div>
  )
}