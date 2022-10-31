import React, { useState, useEffect } from "react";
import { useActionData, NavLink, useNavigate } from "react-router-dom";
import s from './UsersList.module.scss';

export async function removeUser({ request, params}) {
  return params
}

<<<<<<< HEAD


export default ({ list, closeBurger}) => {
=======
export default ({ list, closeBurger, children }) => {
>>>>>>> upstream/main
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

<<<<<<< HEAD
  function close(e){
    e.stopPagination()
=======
  function close(e) {
    e.stopPropagation()
>>>>>>> upstream/main
    closeBurger();
  }

  return (
<<<<<<< HEAD
    <div className={s.list} onClick={(e) => { e.stopPropagation() }}>
=======
    <div className={`${s.list} list`} onClick={(e) => { e.stopPropagation() }}>
>>>>>>> upstream/main
      <h1>Users</h1>
      <ul>
        {users.map(el =>
          <li key={el.id} className={s.item}>
            <NavLink
              onClick={close}
<<<<<<< HEAD
              to={`users/${el.id}`}
=======
              to={`/users/${el.id}`}
>>>>>>> upstream/main
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >{el.id}__{el.name}</NavLink>
          </li>)}
      </ul>
<<<<<<< HEAD
=======
      <>
        {children}
      </>
>>>>>>> upstream/main
    </div>
  )
}