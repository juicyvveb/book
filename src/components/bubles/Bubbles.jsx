import React, { useEffect, useState } from "react";
import s from './Bubbles.module.scss';
import { bubbles_move } from "../../js/gsap/bubles";


export const Bubbles = () => {
  const [play, setPlay] = useState(true);
  useEffect(() => {
    bubbles_move();
  }, [])

  return (
    <div className={s['bubbles']}>
      {
        [...Array(5)].map((el, i) => (
          <div
            key={i}
            className={`${s['bubbles-buble']} buble_${i} buble`}></div>
        ))
      }
    </div>
  )
}