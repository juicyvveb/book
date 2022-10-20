import Users from "../components/user-list/UsersList";
import { Outlet, useNavigation } from "react-router-dom"
import getAlbums from "../api/fetch";
import React, { useState, useEffect } from "react";


const url = 'https://jsonplaceholder.typicode.com/users';



export const Root = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([])
  const [err, setErr] = useState('');



  async function fetchList() {
    let response = await getAlbums(url);
    if (Object.getPrototypeOf(response) == 'Error') {
      setErr(response.message);
      return
    } else {
      setList(response.data)
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      {
        err ?
          <div>{err}</div> :
          <>
            <div id="sidebar">
              <Users list={list} />
            </div>
            <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
              <Outlet />
            </div>
          </>
      }
    </>
  )
}