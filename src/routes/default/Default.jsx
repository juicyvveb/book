import React, { useState, useEffect } from "react";
import s from './Default.module.scss';
import react_logo from '../../assets/img/react.png';
import { initialize_Modal } from "../../js/jquery/modalPopup";
import { Popup } from "../../components/modal/Popup";
import { appear } from "../../js/gsap/popup";

export const Default = () => {
  let show_modal = initialize_Modal();
  const [prompt, setPrompt] = useState(true)
  const [timer, setTimer] = useState(8)

  useEffect(() => {
    if (timer) {
      setTimeout(setTimer, 1000, timer - 1)
    } else {
      setPrompt(false)
    }
  }, [timer, show_modal])



  useEffect(() => {
    if (show_modal) {
      new Promise((res, rej) => {
        setTimeout(() => {
          setPrompt(show_modal);
          res('resilt')
        }, 1000)
      })
        .then((r) => {
          setTimeout(() => {
            appear('.startPopup')
          }, 1)
        })
    }
  }, [])



  return (
    <div className={s.default}>
      {
        prompt
          ? <Popup
            className={'startPopup'}
            close={() => { setPrompt(false) }}
            msg={'Можете нажать на меню и выбрать пользователя'} children={timer} />
          : null
      }
      <h2>
        This is a default Page until you have not load any app-page
      </h2>
      <div className={s['default-img']}>
        <img src={react_logo} alt="" />
      </div>
    </div>
  )
}