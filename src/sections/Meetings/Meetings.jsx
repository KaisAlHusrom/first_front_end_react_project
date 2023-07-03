import { useState, useEffect } from "react"
import { SrcMeetings } from "../../sources"
import MeetingsCateogries from "../../sources/SrcMeetingsCategories.json"
import {MeetingsPage} from "./MeetingPages/MeetingsPage";
import { NavLink } from "react-router-dom";

import "./Meetings.css"



const Meetings = () => {


    //Set All Meetings
    const [meetings, setMeetings] = useState([])

    //Set Category from the document url
    const [category, setCategory] = useState(document.URL.slice(document.URL.lastIndexOf("-") + 1).replace(" ", ""))
    
    //Set the showen meetings when cateogry changes
    useEffect(() => {
        if (category !== "allmeetings") {
            setMeetings(SrcMeetings.filter(meeting => meeting.category === category))
        } else {
            setMeetings(SrcMeetings)
        }
    }, [category])



    //every page how many meeting will show
    const [meetingsPerPage] = useState(6)

    //Set Current Page Number
    const [currentPage, setCurrentPage] = useState(parseInt(document.URL.slice(document.URL.lastIndexOf("page-") + 1, document.URL.lastIndexOf("/")).split("").map(e => parseInt(e)).filter(e => !isNaN(e)).join("")))

    //Set Pages Count
    const [pageCount, setPageCount] = useState(0)

    //Set Pages Count when meetings source and meeting per page change
    useEffect(() => {

        setPageCount(Math.ceil((meetings.length / meetingsPerPage)))
        // setCurrentPage(1)
        // navigate(`/meetings/page-1/category-${category}`)
        // window.location.href = window.location.href.replace("page-2", "page-1")
    }, [meetings, meetingsPerPage])


    //set Pages Buttons
    const [pagesButtons, setPagesButtons] = useState([0])

    //set pages buttons whe pageCount change
    useEffect(() => {
        setPagesButtons([...Array(pageCount + 1).keys()].slice(1))
    }, [pageCount])




    






    

    return (
            <div className="meetings-section">
            <div className="container">
                <ul className="categories">
                    
                    {
                        MeetingsCateogries.cateogries.map((category,i) => {
                            return (
                                <NavLink  
                                    key={i}
                                    to={`/first_front_end_react_project/meetings/page-${currentPage}/category-${category.replace(" ", "")}`} 
                                    onClick={() => {
                                        setCategory(category.replace(" ", ""))
                                    }} 

                                    className={({ isActive }) => isActive ? "main-button" : "main-button unactive-button"}
                                >
                                    {category}
                                </NavLink>
                            )
                        })
                    }
                </ul>
                <div className="meetings">
                    <MeetingsPage number={currentPage} meetingsPerPage={meetingsPerPage} meetings={meetings} />
                </div>

                <div className="pagination">
                    <NavLink 
                    to={`/first_front_end_react_project/meetings/page-${currentPage - 1}/category-${category}`} 
                    style={{
                        opacity: currentPage === 1 ? "0.5" : "1",
                        pointerEvents: currentPage === 1 ? "none" : "auto"
                    }} 
                    className="main-button unactive-button prev-button" 
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </NavLink>
                    {
                        pagesButtons.map((i) => {
                            return (
                                <NavLink 
                                    key={i} 
                                    to={`/first_front_end_react_project/meetings/page-${i}/category-${category}`} 
                                    onClick={() => setCurrentPage(i)} 
                                    className={({ isActive }) => isActive ? "main-button" : "main-button unactive-button"}
                                >
                                    {i}
                                </NavLink>
                                            )
                        })
                    }
                    <NavLink 
                    to={`/first_front_end_react_project/meetings/page-${currentPage + 1}/category-${category}`} 
                    className="main-button unactive-button next-button" 
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    style={{
                        opacity: currentPage === pageCount  ? "0.5" : "1",
                        pointerEvents:currentPage === pageCount ? "none" : "auto"
                    }} 
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </NavLink>


                </div>
            </div>
        </div>
    )
}

export default Meetings