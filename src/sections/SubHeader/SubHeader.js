import React from "react";
import { NavItem } from "./../../components/index"
import "./SubHeader.css"


const SubHeader = (props) => {
    return (
        <div className="sub-header">
            <div className="container sub-header-container">
                <p>
                    This is an educational <span className="orange-color">HTML CSS</span> template by TemplateMo website
                </p>
                <ul>
                    <NavItem href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </NavItem>

                    <NavItem href="https://www.instagram.com/">
                        <i className="fa-brands fa-twitter"></i>
                    </NavItem>
                    
                    <NavItem href="https://www.facebook.com/">
                        <i className="fa-brands fa-behance"></i>
                    </NavItem>

                    <NavItem href="https://www.Linkedin.com/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </NavItem>
                </ul>
            </div>
        </div>
    )
}

export default SubHeader