import React from "react";
import s from './Burger.module.scss';

<<<<<<< HEAD
export default ({clickBurger, children, className}) => {
    const classStyle = className || null
    return (
        <div className={`${s.burger} ${s[`burger${classStyle}`]}`}>
            <button 
            type="button"
            onClick={clickBurger}
            >{children}</button>
            {/* <input type="checkbox" name="burger" id="burger" /> */}
            {/* <label htmlFor="burger">burger</label> */}
=======
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
>>>>>>> upstream/main
        </div>
    )
}