import React, { useState, useEffect } from "react";
import { useActionData, NavLink, useNavigate, useLoaderData } from "react-router-dom";
import s from './UsersList.module.scss';
import fetch from '../../api/fetch';

export async function removeUser({ request, params }) {
  return params
}
const url = 'https://jsonplaceholder.typicode.com/users';





export default ({ list, closeBurger}) => {
  const data = useActionData();
  const navigate = useNavigate();
  // const ls = useLoaderData()
  const [users, setUsers] = useState(list)
  


  // useEffect(() => {
  //   if (data?.userId) {
  //         console.log('yes')
  //         let id = data.userId;
  //         let arr = [...users]

  //         let person = arr.filter(person => person.id === id)[0]
  //         arr.splice(list.indexOf(person), 1);
  //         setUsers([...arr]);
  //         navigate(("/"))
  //       }
  //       else {
  //         console.log('no')
  //         // console.log(list)
  //         // setUsers(list)
  //       }
  // },[])

  useEffect(() => {
    if (data?.userId) {
      console.log('yes')
      let id = data.userId;
      let person = [...list].filter(person => person.id === id)[0]
      list.splice(list.indexOf(person), 1);
      setUsers([...list]);
      navigate(("/"))
    }
    else {
      console.log('no')
      console.log(list)
      setUsers(list)
    }
  }, [data])

  function close(e){
    e.stopPagination()
    closeBurger();
  }

  return (
    <div className={s.list} onClick={(e) => { e.stopPropagation() }}>
      <h1>Users</h1>
      <ul>
        {users.map(el =>
          <li key={el.id} className={s.item}>
            <NavLink
              onClick={close}
              to={`/users/${el.id}`}
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
    </div>
  )
}