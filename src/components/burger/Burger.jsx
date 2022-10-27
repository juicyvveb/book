import React from "react";
import s from './Burger.module.scss';

export default ({clickBurger, children}) => {
    return (
        <div className={s.burger}>
            <button 
            type="button"
            onClick={clickBurger}
            >{children}</button>
            {/* <input type="checkbox" name="burger" id="burger" /> */}
            {/* <label htmlFor="burger">burger</label> */}
        </div>
    )
}