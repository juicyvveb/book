import React from "react";
import fetch from "../../api/fetch";
import { useLoaderData, Link } from "react-router-dom";
import s from './InfoItem.module.scss';
import Indicator from "./todo-indicator/Indicator";

export async function loader({ request, params }) {
  const url = `https://jsonplaceholder.typicode.com/${params.type}/${params.itemId}`
  let response = await fetch(url)
  return { data: response.data, type: params.type }
}

export default () => {
  const { data, type } = useLoaderData();
  const { title, id, body } = data;
  let className = `${s.block} ${s[`block__${type}`]}`;

  return (
    <div className={className}>
      <h3 className={s['block-title']}>{title}</h3>
      <p>
        номер: {id}
      </p>

      {/* body */}
      {body && <p className={s['block-content']}>{body}</p>}


      {/* link for album */}
      {
        type === "albums" && <Link to="photos">смотреть фото</Link>
      }

      {
        type === 'todos' && <Indicator completed={data.completed} className={s['block-indicator']}/>
      }
    </div>
  )
}