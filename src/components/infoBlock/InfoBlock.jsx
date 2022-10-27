import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import fetch from "../../api/fetch";
import s from './InfoBlock.module.scss';
import Indicator from "../info-item/todo-indicator/Indicator";

const url = 'https://jsonplaceholder.typicode.com';

export async function loader({ request, params }) {
  let res = await fetch(`${url}/users/${params.userId}/${params.type}`, {});
  return { res: res.data, type: params.type }
}

function Block() {
  const loaded = useLoaderData(),
    [data, setData] = useState([]),
    [type, setType] = useState('');

  useEffect(() => {
    setData(loaded.res);
    setType(loaded.type)
  }, [loaded])

  // className={el.completed != undefined ?
  //   el.completed ? s.completed : s.nocompleted
  //   : null}
  return (
    <div className={s.block}>
      <h1>{type}</h1>
      <ul className={s.block}>
        {
          data.map(el => (
            <li
              key={el.id}
              >
              <Link to={`${el.id}`} >
                подробнее
              </Link>
              {el.title}
              {el.completed !== undefined && <Indicator completed={el.completed}/>}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Block