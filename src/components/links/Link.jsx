import React from "react";
import { NavLink } from "react-router-dom";
import s from './Link.module.scss';

export const Link = ({address, children, onClick, className}) => {

  
  return (
    <NavLink
      to={address}
      onClick={onClick}
      className={({ isActive, isPending }) =>
        isActive
          ? `${s.link} ${s['link__active']} active ${className}`
          : isPending
            ? `${s.link} ${s['link__pending']} pending ${className}`
            : `${s.link} ${className}`
          
      }
    >{children}
    </NavLink>
  )
}