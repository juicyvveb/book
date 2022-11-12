import React from "react";
import s from './Popup.module.scss';
import { PopupContext } from "../../routes/Root";
export const Popup = ({ msg, children, close, className }) => {
  return (
    <PopupContext.Consumer>
      {({ show, toggle }) => !show 
      ? (
        <div className={`${s.popup} ${className}`}>
          <p>
            {msg}
          </p>
          <button
            className={`${s[`popup-button`]}`}
            onClick={close}
          >
            <span></span>
          </button>
          <p>
            Окно само  исчезнет через: {children}
          </p>
        </div>
      ) 
      : ''}
    </PopupContext.Consumer>

  )
}