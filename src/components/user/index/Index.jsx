import React, { useEffect } from "react";
import s from './Index.module.scss';
import { bubbles_move } from "../../../js/gsap/bubles";

export const Index = () => {

    useEffect(() => {
        bubbles_move()
    }, [])

    return (
        <div className={s.index}>
            <h4>
                Здесь будет отображаться раздел, которы вы выберете...
            </h4>
            <div className={s['index-animation']}>
                {
                    [...Array(5)].map((el, i) => (
                        <div
                            key={i}
                            className={`${s['index-animation-buble']} buble_${i} buble`}></div>
                    ))
                }
            </div>
        </div>
    )
}