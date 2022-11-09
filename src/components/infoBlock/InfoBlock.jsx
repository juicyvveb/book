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

  const isTodo = type === 'todos';
  return (
    <div className={s.block}>
      <h1 className={s['block-title']}>{type}:</h1>
      <ul className={`${s['block-list']} ${isTodo ? s['block-list__todos'] : null}`}>
        {
          data.map((el, i) => (
            <li
              key={el.id}
              className={s['block-item']}
            >
              <span>{i + 1}</span>
              <div>
                {isTodo && <Indicator
                  className={s['block-indicator']}
                  completed={el.completed} />}
                <h5>
                  {el.title.replace(/^./, (el) => el.toUpperCase())}
                </h5>
                <Link to={`${el.id}`} >
                  подробнее...
                </Link>
              </div>

            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Block