import React, { useState, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import { useActionData, useNavigate } from "react-router-dom";
import s from './UsersList.module.scss';
import { Link as SidebarLink } from '../links/Link';
import { Popup } from "../modal/Popup";
import { CSSTransition } from "react-transition-group";
import './popup.scss';



export async function removeUser({ request, params }) {
  return params
}

const root = document.querySelector('#root');
export default ({ list, closeBurger, children }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const [users, setUsers] = useState(list)
  const [successDelete, setSuccessDelete] = useState(false);


  useEffect(() => {
    if (data?.userId) {
      let id = +data.userId;
      let person = users.filter(person => person.id === id)[0];
      let arr = users;
      arr.splice(users.indexOf(person), 1);
      setUsers([...arr]);
      setSuccessDelete(true);
      setTimeout(() => {
        navigate(("/book"));
        setSuccessDelete(false);
      }, 900)
    }
    else {
      setUsers(list)
    }
  }, [list, data])

  function close(e) {
    e.stopPropagation()
    closeBurger();
  }
  const nodeRef = useRef(null);

  function PartOfRemove() {
    return (
      <div className={`${s['removePopup-part']}`}>
        <div className={`${s['removePopup-part--img']}`}></div>
      </div>
    )
  }

  return (
    <div className={`${s.list}`} onClick={(e) => { e.stopPropagation() }}>
      {/* модальное окно при удалении пользователя через портал в root*/}
      {ReactDOM.createPortal(<CSSTransition
        classNames="my-popup"
        onEnter={() => { console.log('entering') }}
        nodeRef={nodeRef}
        mountOnEnter={true}
        unmountOnExit={true}
        in={successDelete}
        appear={successDelete}
        timeout={400}
      >
        <Popup
          ref={nodeRef}
          className={s.removePopup}
          msg="пользователь успешно удален!">
          <PartOfRemove />
        </Popup>
      </CSSTransition>, root)}

      {/* sidebar */}
      <h1 className={s.title}>Users</h1>
      <ul>
        {users.map(el =>
          <li key={el.id} className={s.item}>
            <SidebarLink
              onClick={close}
              address={`/book/users/${el.id}`}>
              {el.id}__{el.name}
            </SidebarLink>
          </li>)}
      </ul>
      <>
        {children}
      </>
    </div>
  )
}