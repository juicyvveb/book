import React from "react";
import { NavLink } from "react-router-dom";
import s from './Link.module.scss';

export const Link = ({address, children, onClick, className}) => {

  
  return (
    <NavLink
      to={address}
      onClick={onClick}
      className={!className ? ({ isActive, isPending }) =>
        isActive
          ? `${s.link} ${s['link__active']}`
          : isPending
            ? `${s.link} ${s['link__pending']}`
            : `${s.link}`
          : className
      }
    >{children}
    </NavLink>
  )
}