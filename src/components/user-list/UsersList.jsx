import React, { useState, useEffect } from "react";
import { useActionData, NavLink, useNavigate } from "react-router-dom";
import s from './UsersList.module.scss';


export async function removeUser({ request, params }) {
  return params
}

export default ({ list, closeBurger, children }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const [users, setUsers] = useState(list)

  useEffect(() => {
    if (data?.userId) {
      let id = +data.userId;
      let person = users.filter(person => person.id === id)[0];
      let arr = users;
      arr.splice(users.indexOf(person), 1);
      setUsers([...arr]);
      navigate(("/"))
    }
    else {
      setUsers(list)
    }
  }, [list, data])

  function close(e) {
    e.stopPropagation()
    closeBurger();
  }

  return (
    <div className={`${s.list}`} onClick={(e) => { e.stopPropagation() }}>
      <h1 className={s.title}>Users</h1>
      <ul>
        {users.map(el =>
          <li key={el.id} className={s.item}>
            <NavLink
              onClick={close}
              to={`/users/${el.id}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? `${s.link} ${s['link__active']}`
                  : isPending
                    ? `${s.link} ${s['link__pending']}`
                    : `${s.link}`
              }
            >{el.id}__{el.name}</NavLink>
          </li>)}
          </ul>
      <>
        {children}
      </>
    </div>
  )
}