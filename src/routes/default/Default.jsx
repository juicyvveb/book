import React from "react";
import s from './Default.module.scss';
import react_logo from '../../assets/img/react.png'
export const Default = () => {
  return (
    <p className={s.default}>
      <h2>
        This is a default Page until you have not load any app-page
      </h2>
      <div className={s['default-img']}>
        <img src={react_logo} alt="" />
      </div>
    </p>
  )
}