import React from "react";
import s from './Indicator.module.scss';

export default ({completed}) => {
  
  const styleClass = function () {
    return completed ? 'completed' : 'uncompleted'
  }
  console.log(s.indicator[`__${styleClass()}`])
  let className = `${s.indicator}`
  styleClass()

  return (
    <div className={className}>
      
    </div>
  )
}