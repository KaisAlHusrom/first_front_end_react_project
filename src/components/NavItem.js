import React, { useState} from "react";
import {  NavLink } from "react-router-dom";


const NavItem = (props) => {



    return ( 
        <>
            <li>
                <NavLink 
                to={props.href} 
                className={
                    ({ isActive }) => isActive ? "current-page-a" : ""
                }>
                    {props.children}
                </NavLink>
            </li>
        </>
    )
}



const NavItemDrop = (props) => {
    const [isOpened, setOpen] = useState(false)
    const toggle = _ => setOpen(!isOpened)
    // here 

    return ( 
        <>
            <li >
                <a href={props.href} onClick={toggle}>
                    {props.children} <i className="fa-solid fa-angle-down"></i>
                </a>
                
                <ul className="dropped-menu" style={{
                    display: isOpened ? "flex" : "none"
                }}>
                    {props.droppedItems.map(e => e)}
                </ul>
            </li>
        </>
    )
}

export default NavItem
export {NavItemDrop}