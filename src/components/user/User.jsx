import React from "react";
import fetch from "../../api/fetch";
import { useLoaderData, Form, NavLink, Outlet } from "react-router-dom";
import s from './User.module.scss';

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
      <h1>{user.name}_{user.id}</h1>
      <Form method="post" action="remove" style={{ float: 'right' }}>
        <button> remove </button>
      </Form>
      <ul>
        {
          types.map(type => (
            <li key={type}>
              <NavLink
                to={`/users/${user.id}/${type}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                {type}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="block">
        <Outlet />
      </div>
    </div>
  )
}