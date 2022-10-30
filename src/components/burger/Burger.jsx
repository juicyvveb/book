import React from "react";
import s from './Burger.module.scss';

export default ({clickBurger, children, className}) => {
    const classStyle = className || null
    return (
        <div className={`${s.burger} burger ${s[`burger__${classStyle}`]}`}>
            <button 
            type="button"
            onClick={(e) => {
                e.stopPropagation()
                console.log('click');
                clickBurger()
            }}
            >{children}</button>
            {/* <input type="checkbox" name="burger" id="burger" /> */}
            {/* <label htmlFor="burger">burger</label> */}
        </div>
    )
}