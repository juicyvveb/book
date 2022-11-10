import React, { useEffect } from "react";
import s from './Index.module.scss';
import { Bubbles } from "../../bubbles/Bubbles";
export const Index = () => {

    return (
        <div className={s.index}>
            <h4>
                Здесь будет отображаться раздел, которы вы выберете...
            </h4>
            <Bubbles/>
        </div>
    )
}