import React, { useRef } from "react";
import { Link } from "react-router-dom";
import s from './Header.module.scss';
import { Link as HeaderLink } from "../links/Link";
import logo from '../../assets/img/kick.png';

export const Header = () => {
  const headerRef = useRef(null);

  let prevScroll = window.pageYOffset;

  document.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - prevScroll > 2 && headerRef.current) {
      headerRef?.current.classList.add(`${s['header__appear']}`);
    } else if (prevScroll - currentScroll > 2 && headerRef.current) {
      headerRef?.current.classList.remove(`${s['header__appear']}`);
    }
    prevScroll = currentScroll;
  })

  return (
    <div className={s.header + ' wrap'} ref={headerRef}>
      <Link to="/book" className={`${s['header-logo']}`}>
        <img src={logo} alt="logo" />
      </Link>

      <div className={`${s['header-links']}`}>
        <HeaderLink
          address="../book/about"
        >about</HeaderLink>
        <HeaderLink
          address="../book/contacts"
        >contacts</HeaderLink>
      </div>
    </div>
  )
}