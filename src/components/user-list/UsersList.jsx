import React, { useState, useEffect } from "react";
import getAlbums from "../../api/fetch";
import { Link, useActionData, NavLink, useNavigate } from "react-router-dom";
import s from './UsersList.module.scss';

export async function removeUser({ request, params }) {
  return params
}

export default ({ list }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data?.userId) {
      let id = data.userId;
      let person = [...list].filter(person => person.id == id)[0]
      list.splice(list.indexOf(person), 1);
      setUsers([...list]);
      navigate(("/"))
    }
    else {
      setUsers(list)
    }
  }, [list, data])

  return (
    <div>
      <div className={s.list}>
        <h1>Users</h1>
        <ul>
          {users.map(el =>
            <li key={el.id} className={s.item}>
              <NavLink 
              to={`users/${el.id}`}
              className={({isActive,isPending}) => 
                isActive 
                ? "active"
                : isPending
                ? "pending"
                : ""
              }
              >{el.id}__{el.name}</NavLink>
            </li>)}
        </ul>
      </div>
    </div>

  )
}