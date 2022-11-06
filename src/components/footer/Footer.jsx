import React from "react";
import s from './Footer.module.scss';
import tg from '../../assets/img/tg.png';
import inst from '../../assets/img/inst.png';
import gh from '../../assets/img/gh.png';
import link from '../../assets/img/link.png';


export const Footer = () => {
    const social = 'tg inst gh link'
    const imgs = {
        tg,
        inst,
        gh,
        link
    }

    return (
        <div className={s.footer + ' wrap'}>
            <div className={`${s['footer-copyRight']}`}>
                <p>
                    Икоки взяты из сайта: <a href="https://www.flaticon.com/">www.flaticon.com</a>
                </p>
            </div>
            <div className={`${s['footer-social']}`}>
                <ul>
                    {
                        social.split(' ').map((el, i) => (
                            <li key={i}>
                                <a href="">
                                    <img src={imgs[`${el}`]} alt={el} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}