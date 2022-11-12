import React from "react";
import s from './Popup.module.scss';
//переадресация рефов, потому что сам компонент рефы не принимает, а нужно бы для CSSTransition
export const Popup = React.forwardRef(({msg, children, className, close}, ref) => (
      <div ref={ref} className={`${s.popup} ${className}`}>
      <h2>
        {msg}
      </h2>
      {children}
      <button
        onClick={close}
      >
        <span></span>
      </button>
    </div>
))