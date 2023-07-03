import React from 'react'

// import image 


const Service = (props) => {
  return (
    <div className='service'>
      <div className='image'>
        <img src={props.icon} alt=''></img>
      </div>
      <div className='text'>
        <h5>
          {props.title}
        </h5>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default Service