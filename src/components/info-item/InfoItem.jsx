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
  console.log(data)
  let className = `${s.item} ${s[`item--${type}`]}`;

  const styleClass = function () {
    if (data?.completed !== undefined && data.completed) {
      className += ` ${s['item--todos__completed']}`
    } else if (data?.completed !== undefined && !data.completed) {
      className += ` ${s['item--todos__uncompleted']}`
    }
  }
  // styleClass()

  return (
    <div className={className}>
      <h3 className={s.title}>{title}  номер: {id}</h3>
      {/* body */}
      {body && <p>{body}</p>}


      {/* link for album */}
      {
        type == "albums" && <Link to="photos">смотреть фото</Link>
      }

      {
        type == 'todos' && <Indicator completed={data.completed}/>
      }
    </div>
  )
}