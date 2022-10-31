import React from "react";
import s from './Burger.module.scss';

export default ({ clickBurger, open }) => {
    const classStyle = open ? 'open' : 'close'

    return (
        <div className={`${s.burger} ${s[`burger__${classStyle}`]}`}>
            <div
                className={s[`burger-button`]}
                onClick={(e) => {
                    e.stopPropagation()
                    clickBurger()
                }}
            >
                <span></span>
            </div>
        </div>
    )
}