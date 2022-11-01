import React, {useRef} from "react";
import { Link } from "react-router-dom";
import s from './Header.module.scss';

import logo from '../../assets/img/kick.png';

export const Header = () => {
  const headerRef = useRef(null);

  let prevScroll = window.pageYOffset;

  document.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if(currentScroll - prevScroll > 10 && headerRef.current){
      headerRef.current.classList.add(`${s['header__appear']}`);
    }else if(prevScroll - currentScroll > 10 && headerRef.current){
      headerRef.current.classList.remove(`${s['header__appear']}`);
    }
    prevScroll = currentScroll;
  })

  return (
    <div className={s.header} ref={headerRef}>
      <Link to="/" className={`${s['header-link']}`}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}