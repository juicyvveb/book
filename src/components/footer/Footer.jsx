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

    console.log(imgs['tg'])
    return (
        <div className={s.footer}>
            <div className={`${s['footer-copyRight']}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque.</div>
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