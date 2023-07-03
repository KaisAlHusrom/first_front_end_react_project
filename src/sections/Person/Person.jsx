import { json } from "react-router-dom"
import "./Person.css"
// import { SrcPerson } from "../../sources"
import { useEffect, useState } from "react"
export default function Person() {
    const [persons, setPersons] = useState([])

    async function fetchData() {
        const res = await fetch("http://localhost:8080/meetings/showMeetings")
        return await res.json()
    }

    useEffect( () => {
        fetchData().then((res) => {
            setPersons(res)
            console.log(res)
        }) 
    }, [])
    return (
        <div className="container">
            {
                persons.map(person => {
                    return (
                        <div className="persons" key={person.id}>
                            <div className="person">
                                <h1>{person.title}</h1>
                                <h2>{person.description}</h2>
                                <h3>{person.price}</h3>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}