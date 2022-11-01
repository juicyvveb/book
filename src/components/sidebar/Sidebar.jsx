import React, {useState, useRef} from "react";
import { CSSTransition } from "react-transition-group";
import Users from "../user-list/UsersList";
import Burger from "../burger/Burger";
import s from './Sidebar.module.scss';

export const Sidebar = ({list}) => {
  const [sidebar, setSidebar] = useState(false);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={sidebar}
      nodeRef={nodeRef}
      timeout={100}
      classNames={'my-node'}
    >
      <div
        id="sidebar"
        className={s.sidebar}
        ref={nodeRef}
        onClick={() => { setSidebar(false) }}
      >
        <Users list={list} closeBurger={() => { setSidebar(false) }}>
          <Burger
            open={sidebar}
            clickBurger={() => { setSidebar(!sidebar) }}
          />
        </Users>
      </div>
    </CSSTransition>
  )
}