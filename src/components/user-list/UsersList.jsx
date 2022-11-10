import React, { useState, useEffect } from "react";
import { useActionData, NavLink, useNavigate } from "react-router-dom";
import s from './UsersList.module.scss';
import { Link as SidebarLink } from '../links/Link';
import { PopupContext } from "../../routes/Root";

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
      console.log(PopupContext)
      navigate(("/"));
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
    <PopupContext.Consumer>
      {({show, toggle}) => (<div className={`${s.list}`} onClick={(e) => { e.stopPropagation() }}>
        {/* <h1>{show.toString()}</h1> */}
        <h1 className={s.title}>Users</h1>
        <ul>
          {users.map(el =>
            <li key={el.id} className={s.item}>
              <SidebarLink
                onClick={close}
                address={`/users/${el.id}`}>
                {el.id}__{el.name}
              </SidebarLink>
            </li>)}
        </ul>
        <>
          {children}
        </>
      </div>)}
    </PopupContext.Consumer>
  )
}