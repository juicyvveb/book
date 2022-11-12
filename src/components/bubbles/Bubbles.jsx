import React, { useEffect, useState } from "react";
import s from './Bubbles.module.scss';
import { bubbles_move } from "../../js/gsap/bubbles";


export const Bubbles = ({className}) => {
  const [play, setPlay] = useState(true);
  let move = bubbles_move;
  console.log('effect')
  useEffect(() => {
    move();
    return () => {
      move = () => false;
    }
  }, [move])

  return (
    <div className={`${s['bubbles']} ${className}`}>
      {
        [...Array(5)].map((el, i) => (
          <div
            key={i}
            className={`${s['bubbles-bubble']} bubble_${i} bubble`}></div>
        ))
      }
    </div>
  )
}