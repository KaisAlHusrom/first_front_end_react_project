import {ACTIONS} from "./../sections/Meetings/MeetingPages/MeetingsPage"
const Meeting = (props) => {
  return (
    <div className='meeting' style={{
        opacity: props.finished ? "0.5" : "1"
        
    }}>
        <button 
        className="price" 
        style={{
            right: "10px",
            left: "auto",
        }}
        onClick={() => props.dispatch({type: ACTIONS.ACTION_DELETE_MEETING, payload: {id: props.id}})}>
            Delete 
        </button>
        <button 
        className="price" 
        style={{
            right: "10px",
            top: "60px",
            left: "auto",
        }}
        onClick={() => props.dispatch({type: ACTIONS.ACTION_TOGGLE_MEETING, payload: {id: props.id}})}>
            Finish
        </button>
        <div className='price'>
            {props.price}
        </div>
        <div className='image'>
            <a href="#1"><img src={props.image} alt=''></img></a>
        </div>
        <div className='meeting-info'>
            <div className='date'>
                <h6 className='month'>
                {props.month}
                </h6>
                <p className='day'>
                {props.day}
                </p>
            </div>
            <div className='details'>
                <a href='#1'>
                    <h4>
                        {props.title}
                    </h4>
                </a>
                <p>
                {props.desc}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Meeting