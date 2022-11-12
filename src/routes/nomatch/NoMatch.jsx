import React from "react";
import s from './NoMatch.module.scss';
import { Bubbles } from "../../components/bubbles/Bubbles";
export const NoMatch = () => {
  return (
    <div className={s.block}>
      <Bubbles />
      <h1>Такой страницы не найдено <span>:&#040;</span></h1>
    </div>
  )
}