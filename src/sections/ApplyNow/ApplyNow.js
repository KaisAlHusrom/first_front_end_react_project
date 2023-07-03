import React, { useState} from 'react'
import { SrcAccordions } from '../../sources'
import "./ApplyNow.css"

const ApplyNow = () => {

    let [childNo, setChildNo] = useState(0)
    



    return (
        <div className='apply-now'>
            <div className='container'>
                <div className='apply-section'>
                    <div className='apply'>
                        <h2>
                            Apply for bechalor degree
                        </h2>
                        <p>
                        You are allowed to use this edu meeting CSS template for your school or university or business. 
                        You can feel free to modify or edit this layout.
                        </p>
                        <a className='main-button' href='#a'>
                            Join us now
                        </a>
                    </div>
                    <div className='apply'>
                        <h2>
                            Apply for bechalor degree
                        </h2>
                        <p>
                        You are allowed to use this edu meeting CSS template for your school or university or business. 
                        You can feel free to modify or edit this layout.
                        </p>
                        <a className='main-button yellow-button' href='#a'>
                            Join us now
                        </a>
                    </div>
                </div>
                <div className='accordions'>
                    {

                        SrcAccordions.map((acc, i) => 
                            <div className="accordion" key={acc.key}>
                                <div className={`accordion-title ${childNo === i ? "title-opened" : ""}`} onClick={_ => {setChildNo(i)}}>
                                    <h2>
                                        {acc.title}
                                    </h2>
                                    {childNo === i ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-right"></i>}
                                </div>
                                <div className="accordion-text" style={{
                                    height: childNo === i ? (acc.text.length <= 200 ? "130px" : (acc.text.length <= 350 ? "210px" : (acc.text.length <= 500 ? "320px" : "0"))) : "0px"
                                }}>
                                    <p>
                                    {acc.text}
                                    </p>
                                </div>
                            </div>
                            )
                    }
                
                </div>
            </div>
        </div>
    )
}

export default ApplyNow