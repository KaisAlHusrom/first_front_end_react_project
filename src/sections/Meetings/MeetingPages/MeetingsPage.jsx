import { useEffect, useReducer } from "react"
import { Meeting } from "../../../components"


export const ACTIONS = {
    ACTION_SET_CURRENT_MEETINGS: "set-current-meetings",
    ACTION_TOGGLE_MEETING: "action-toggle-meeting",
    ACTION_DELETE_MEETING: "action-delete-meeting",
    ACTION_SELECT_CATEGORY: "select-category"
}





export const MeetingsPage = (props) => {

    function reducer(meetings, aciton) {
        switch(aciton.type) {
            case ACTIONS.ACTION_SET_CURRENT_MEETINGS:
                const lastIndex = props.number * props.meetingsPerPage
                const firstIndex = lastIndex - props.meetingsPerPage
                meetings = props.meetings.slice(firstIndex, lastIndex)
                return meetings

            case ACTIONS.ACTION_DELETE_MEETING:
                meetings = meetings.filter(meeting => meeting.id !== aciton.payload.id)
                return meetings

            case ACTIONS.ACTION_TOGGLE_MEETING:
                meetings = meetings.map(meeting => {
                    if (meeting.id === aciton.payload.id ) {
                        return {...meeting, finished: !meeting.finished}
                    }
                    return meeting
                })
                return meetings
            default: 
                return meetings
                
        }
    }


    //WITH USE CALLBACK HOOK
    // const printMeetings = useCallback(() => {
    //     const lastIndex = props.number * props.meetingsPerPage
    //     const firstIndex = lastIndex - props.meetingsPerPage
    //     const meetings = SrcMeetings.slice(firstIndex, lastIndex)
    //     return meetings
    // }, [props.number, props.meetingsPerPage])


    //WITH USE SET HOOK
    // const [cMeetings, setCMeetings] = useState(printMeetings)

    //WITH USE REDUCER HOOK
    const [meetings, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        dispatch({type: ACTIONS.ACTION_SET_CURRENT_MEETINGS})
        // setCMeetings(printMeetings)
    }, [props.number, props.meetingsPerPage, props.meetings])



    

    return (
        <>
        {
            
            meetings.map((meeting, i) => {
                return (
                    <Meeting key={i} id={meeting.id} dispatch={dispatch} finished={meeting.finished} price={`$${meeting.price}`} image={meeting.image} month={meeting.month} day={meeting.day} title={meeting.title} desc={meeting.desc}></Meeting>
                )
            })
            
        }
        </>
    )
}

