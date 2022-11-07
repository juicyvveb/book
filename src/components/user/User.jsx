import React from "react";
import fetch from "../../api/fetch";
import { useLoaderData, Form, NavLink, Outlet } from "react-router-dom";
import s from './User.module.scss';
import { Link as InfoLink } from '../links/Link';
import avatar from '../../assets/img/user.png';
const url = 'https://jsonplaceholder.typicode.com/users';

export async function loader({ params }) {
  const user = await fetch(`${url}/${params.userId}`)
  return user.data
}

export default () => {
  const types = ['albums', 'posts', 'todos']
  const user = useLoaderData();

  return (

    <div className={s.user+ ' wrap'}>
      <div className={s['user-container1']}>

      
      <h1 className={`${s[`user-name`]}`}>
        {user.name}
      </h1>
      <div className={`${s[`user-avatar`]}`}>
        <img src={avatar} alt="avatar" />
      </div>
      <p className={s['user-id']}>
        id: {user.id}
      </p>
      <div className={`${s[`user-remove`]}`}>
        <Form method="post" action="remove" style={{ float: 'right' }}>
          <button> </button>
        </Form>
      </div>

      <ul className={`${s[`user-infoList`]}`}>
        {
          types.map(type => (
            <li key={type} className={`${s[`user-infoList--item`]}`}>
              <InfoLink
                address={`/users/${user.id}/${type}`}
                className={`user-link`}
              >
                {type}
              </InfoLink>
            </li>
          ))
        }
      </ul>
      </div>
      <div className={s['user-block'] +' ' + s['user-container']}>
        <Outlet />
      </div>
    </div >
  )
}