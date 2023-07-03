import React from 'react'
import { NavItem, Meeting } from '../../components'
import { MeetingCategories, SrcMeetings } from '../../sources'

import "./UpComingMeetings.css"



const UpComingMeetings = () => {
  return (
    <div className='up-coming-meetings'>
        <div className='container'>
            <div className='title'>
                <h2>Upcoming meetings</h2>
            </div>
            <div className='content'>
                <div className='meeting-category'>
                    <div className='meeting-category-title'>
                        <h4>Meeting categories</h4>
                    </div>
                    <ul>
                        {
                            MeetingCategories.map((e, i) => 
                                <NavItem key={i} href={e.href}>{e.category}</NavItem>
                            )
                        }
                    </ul>
                    <div className='meeting-category-button'>
                        <a href='#a' className='main-button'>
                            all upcoming meetings
                        </a>
                    </div>
                </div>
                <div className='meetings'>
                    {SrcMeetings.slice(0,4).map((e, i) => {
                            return (
                                <Meeting key={i} price={`$${e.price}`} image={e.image} month={e.month} day={e.day} title={e.title} desc={e.desc}></Meeting>
                            )
                    }
                        )}

                </div>
            </div>
        </div>
    </div>
  )
}

export default UpComingMeetings