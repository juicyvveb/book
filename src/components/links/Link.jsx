import React from "react";
import { NavLink } from "react-router-dom";
import s from './Link.module.scss';

export const Link = ({address, children, onClick, className}) => {

  
  return (
    <NavLink
      to={address}
      onClick={onClick}
<<<<<<< HEAD
      className={!className ? ({ isActive, isPending }) =>
        isActive
          ? `${s.link} ${s['link__active']}`
          : isPending
            ? `${s.link} ${s['link__pending']}`
            : `${s.link}`
          : className
=======
      className={({ isActive, isPending }) =>
        isActive
          ? `${s.link} ${s['link__active']} active ${className}`
          : isPending
            ? `${s.link} ${s['link__pending']} pending ${className}`
            : `${s.link} ${className}`
>>>>>>> a79d42f8655aa9457ae8428f9d5bfabd5e1cebdb
      }
    >{children}
    </NavLink>
  )
}