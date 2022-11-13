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
    const socials = {
        tg: 'https://t.me/nazzarra',
        inst: 'https://instagram.com/el_nazira_',
        gh: 'https://github.com/juicyvveb',
        link: 'https://www.linkedin.com/in/nazar-zenkov-851b15248/'
    }

    return (
        <div className={s.footer + ' wrap'}>
            <div className={`${s['footer-copyRight']}`}>
                <p>
                    Иконки взяты из сайта: <a href="https://www.flaticon.com/">www.flaticon.com</a>
                </p>
            </div>
            <div className={`${s['footer-social']}`}>
                <ul>
                    {
                        social.split(' ').map((el, i) => (
                            <li key={i}>
                                <a href={socials[el]}>
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