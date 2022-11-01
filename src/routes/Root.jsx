import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import React, { useState, useEffect } from "react";
import fetch from "../api/fetch";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Loader } from "../components/loader/Loader";

export async function loader({ }) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return await fetch(url)
}

export const Root = () => {
  const navigation = useNavigation();
  const { data: loadedList } = useLoaderData();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(loadedList)
  }, [])


  return (
    <>
      <Sidebar list={list} />
      <div id="detail">
        <Outlet />
        {
          navigation.state === 'loading' 
          ? <Loader/>
          : null
        }
      </div>
    </>
  )
}