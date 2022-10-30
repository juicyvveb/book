import Users from "../components/user-list/UsersList";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import getAlbums from "../api/fetch";
import React, { useState, useEffect, useRef } from "react";
import Burger from "../components/burger/Burger";
import { CSSTransition } from "react-transition-group";
import fetch from "../api/fetch";


const url = 'https://jsonplaceholder.typicode.com/users';

export async function loader({}){
  return await fetch(url)
}

export const Root = () => {
  const navigation = useNavigation();
  const {data: loadList} = useLoaderData();
  const [list, setList] = useState(loadList);
  const [err, setErr] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setList(loadList);
    // console.log(loadList)
    // console.log(list)
  }, [])

  async function fetchList() {
    let response = await getAlbums(url);
    if (Object.getPrototypeOf(response) === 'Error') {
      setErr(response.message);
      return
    } else {
      setList(response.data)
    }
  }

  return (
    <>
      {
        err
          ? <div>{err}</div>
          : <>
            {/* <Burger clickBurger={() => { setSidebar(!sidebar) }}>
              {sidebar ? 'true' : 'false'}
            </Burger> */}
            {/* <CSSTransition
              in={sidebar}
              nodeRef={nodeRef}
              timeout={100}
              appear={true}
              // mountOnEnter={true}
              // unmountOnExit={true}
              classNames={'my-node'}
            > */}
              <div
                id="sidebar"
                ref={nodeRef}
                onClick={() => { setSidebar(false) }}
              >
                <Burger
                  clickBurger={() => { setSidebar(!sidebar) }}
                  className="innerSidebar"
                >
                  {sidebar ? 'true' : 'false'}
                </Burger>
                <Users list={list} closeBurger={() => { setSidebar(false) }} />
              </div>
            {/* </CSSTransition> */}
            <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
              <Outlet />
            </div>
          </>
      }
    </>
  )
}