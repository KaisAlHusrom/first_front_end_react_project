import { SrcGetInTouch } from "../../sources"

import "./GetInTouch.css"

export default function GetInTouch () {



    return (
    <div className="get-in-touch-section">
        <div className="container">
            <div className="get-in-touch-form">
                <div className="title">
                    <h3>Let's get in touch</h3>
                </div>
                <form action="#">
                    <div className="info">
                        <input type="text" id="name" placeholder="YOURNAME...*"/>
                        <input type="text" id="email" placeholder="YOUR EMAIL..."/>
                        <input type="text" id="subject" placeholder="SUBJECT...*"/>
                    </div>
                    <div className="message">
                        <textarea name="message" id="message" placeholder="YOUR MESSAGE..."></textarea>
                    </div>
                    <div className="submit">
                        <button type="submit" className="main-button">Send message now</button>
                    </div>
                </form>
            </div>
            <div className="get-in-touch-info">
                {
                    SrcGetInTouch.map((contact_way, i) => {
                        return (
                            <div key={i}  className="contact-way">
                                <h4> {contact_way.contactWay} </h4>
                                <p> {contact_way.value} </p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

