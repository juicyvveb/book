import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import React, { useState, useEffect } from "react";
import fetch from "../api/fetch";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Loader } from "../components/loader/Loader";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Popup } from "../components/modal/Popup";

export async function loader({ }) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return await fetch(url)
}

export const PopupContext = React.createContext()
  // {
//   show: false,
//   toggleShow: function () {
//     this.show = !this.show
//     setTimeout(() => {
//       this.show = false;
//     }, 1000)
//   }
// })

const obj = {
  show: false,
  toggleShow: function () {
    this.show = !this.show
    setTimeout(() => {
      this.show = false;
    }, 1000)
  }
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
      {/* <h1 style={{ position: 'absolute', top: '100px', left: '200px', zIndex: '20' }}> {PopupContext._currentValue.show.toString()}</h1> */}
      {/* {PopupContext._currentValue.show && <Popup className={'popup popup__remove'} />} */}
      <PopupContext.Provider value={obj}>
        <Popup className={'popup popup__remove'} />
        <Sidebar list={list} />
      </PopupContext.Provider>
      <div id="detail">
        <Outlet />
        <Header />
        {
          navigation.state === 'loading'
            ? <Loader />
            : null
        }
        <Footer />
      </div>
    </>
  )
}