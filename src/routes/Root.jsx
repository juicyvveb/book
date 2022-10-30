import Users from "../components/user-list/UsersList";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import React, { useState, useEffect, useRef } from "react";
import Burger from "../components/burger/Burger";
import { CSSTransition } from "react-transition-group";
import fetch from "../api/fetch";



export async function loader({ }) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return await fetch(url)
}

export const Root = () => {
  const navigation = useNavigation();
  const { data: loadedList } = useLoaderData();
  const [list, setList] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setList(loadedList)
  }, [])

  function SidebarMenu() {
    return (
      <>
        <CSSTransition
          in={sidebar}
          nodeRef={nodeRef}
          timeout={100}
          classNames={'my-node'}
        >
          <div
            id="sidebar"
            ref={nodeRef}
            onClick={() => { setSidebar(false) }}
          >
            <Users list={list} closeBurger={() => { setSidebar(false) }}>
              <Burger open={sidebar} clickBurger={() => { setSidebar(!sidebar) }} />
            </Users>
            <div className="sidebar-block"></div>
          </div>
        </CSSTransition>
      </>
    )
  }

  return (
    <>
      <CSSTransition
          in={sidebar}
          nodeRef={nodeRef}
          timeout={100}
          classNames={'my-node'}
        >
          <div
            id="sidebar"
            ref={nodeRef}
            onClick={() => { setSidebar(false) }}
          >
            <Users list={list} closeBurger={() => { setSidebar(false) }}>
              <Burger open={sidebar} clickBurger={() => { setSidebar(!sidebar) }} />
            </Users>
            <div className="sidebar-block"></div>
          </div>
        </CSSTransition>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  )
}