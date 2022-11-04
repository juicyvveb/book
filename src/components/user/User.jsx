import React from "react";
import fetch from "../../api/fetch";
import { useLoaderData, Form, NavLink, Outlet } from "react-router-dom";
import s from './User.module.scss';
import { Link as InfoLink } from '../links/Link';

const url = 'https://jsonplaceholder.typicode.com/users';

export async function loader({ params }) {
  const user = await fetch(`${url}/${params.userId}`)
  return user.data
}

export default () => {
  const types = ['albums', 'posts', 'todos']
  const user = useLoaderData();

  return (

    <div className={s.user}>
      <h1 className={`${s[`user-name`]}`}>
        {user.name}_{user.id}
      </h1>
      <div className={`${s[`user-avatar`]}`}>
        <img src="" alt="avatar" />
      </div>
      <div className={`${s[`user-remove`]}`}>
        <Form method="post" action="remove" style={{ float: 'right' }}>
          <button> remove </button>
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
      <div className="block">
        <Outlet />
      </div>
    </div >
  )
}