import Users from "../components/user-list/UsersList";
import { Outlet, useNavigation } from "react-router-dom"
import getAlbums from "../api/fetch";
import React, { useState, useEffect } from "react";
import Burger from "../components/burger/Burger";

const url = 'https://jsonplaceholder.typicode.com/users';



export const Root = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([])
  const [err, setErr] = useState('');
  const [sidebar, setSidebar] = useState(0);

  useEffect(() => {
    fetchList();
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
        err ?
          <div>{err}</div> :
          <>
            <Burger clickBurger={() => { setSidebar(!sidebar) }}>
              {sidebar ? 'true' : 'false'}
            </Burger>
            {
              sidebar
                ?
                  <div id="sidebar">
                    <Users list={list} />
                  </div>
                : null
            }

            <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
              <Outlet />
            </div>
          </>
      }
    </>
  )
}