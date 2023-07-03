import  { useEffect, useState, useRef} from "react";
import   {NavItem, NavItemDrop } from "../../components/index";


import "./Header.css"



const Header = _ => {
    const links = useRef()
    const [isOpen, setIsOpen] = useState(false);
    // let isOpen = false
    const toggle = _ => setIsOpen(!isOpen)

    const [isFixed, setIsFixed] = useState(false)

    //to make header position flex
    useEffect(_ => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {

                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        })
    })

    // add on click to links 
    useEffect(() => {
        let values = links.current.children
        for(let i = 0; i < values.length ; i++) {
            if (isOpen) {
                values[i].addEventListener("click", () => toggle())
            }
        }

    })

    return (
        <div className={`header ${isFixed ? "header-background" : ""}`}>
            <div className="container header-container">
                <p>
                    edu meeting
                </p>
                <div className={`bars ${isOpen ? 'opened' : 'closed'}`} onClick={toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`main-menu ${isOpen ? 'menu-open' : ''}`} ref={links}>
                    <NavItem href="/first_front_end_react_project/" class="current-page-a">
                        Home
                    </NavItem>
                    <NavItem href="/first_front_end_react_project/meetings/page-1/category-allmeetings">
                        Meetings
                    </NavItem>
                    <NavItem href="/first_front_end_react_project/apply">
                        apply now
                    </NavItem>
                    <NavItemDrop droppedItems={[
                        <NavItem href="/first_front_end_react_project/up_comming_meetings" key="0">upcomming meetings</NavItem>,
                        <NavItem href="/first_front_end_react_project/meetings_details" key="1">meetings details</NavItem>
                    ]}>
                        Pages
                    </NavItemDrop>
                    <NavItem href="/first_front_end_react_project/courses">
                        courses
                    </NavItem>
                    <NavItem href="/first_front_end_react_project/contact_us">
                        contact us
                    </NavItem>
                </ul>
                
            </div>
        </div>
    )
}

export default Header