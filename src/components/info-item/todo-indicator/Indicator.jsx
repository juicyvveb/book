import React from "react";
import s from './Indicator.module.scss';

export default ({completed, className}) => {
  
  const styleClass = function () {
    return completed ? 'completed' : 'uncompleted'
  }
  let classes = `${s.indicator} ${s[`indicator__${styleClass()}`]} ${className}`

  return (
    <div className={classes}>
      
    </div>
  )
}