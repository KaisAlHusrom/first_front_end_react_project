import { FactBox } from "../../components"
//import style
import "./UniversityFacts.css"

import imageVideo from "./../../assets/images/play-icon.png"


const UniversityFacts = () => {



    // const [succesedStudent, setSuccesedStudent] = useState(0)
    // const [newStudent, setNewStudent] = useState(0)
    // const [currentTeachers, setCurrentTeachers] = useState(0)
    // const [awards, setAwards] = useState(0)


    // useEffect(() => {
    //     let started = false
    //     let number_boxes = [succesedStudentBox.current, newStudentBox.current, currentTeachersBox.current, awardsBox.current]
    //     const scrolling =  function() {
    //         if(window.scrollY > numbers.current.offsetTop - 300) {
    //             if(!started) {
    //                 number_boxes.forEach(num => {
    //                     increament(num)
    //                 })

    //             }
    //             started = true
    //         }
    //     }

    //     window.addEventListener("scroll", scrolling)

    //     return () => {
    //         window.removeEventListener("scroll", scrolling)
    //     }
    // }, [])



    // const increament = num => {
    //     let goal = Number(num.dataset.goal)
    //     let count = setInterval(() => {
    //         if(Number(num.textContent.split("").filter(e => e !== "%").join("")) < goal) {
    //             switch(num.id) {
    //                 case "succesedStudent":
    //                     setSuccesedStudent(prev => prev + 1)
    //                     break;
    //                 case "currentTeachers":
    //                     setCurrentTeachers(prev => prev + 1)
    //                     break;
    //                 case "newStudent":
    //                     setNewStudent(prev => prev + 1)
    //                     break
    //                 case "awards":
    //                     setAwards(prev => prev + 1)
    //                     break
    //                 default:
    //                     break
    //             }
    //         } else {
    //             clearInterval(count);
    //         }
    //     }, 2000 / goal)
    // }

    return (
        <div className="university-facts-section">
            <div className="container">
                <div className="numeric-facts">
                    <div className="title">
                        <h3>
                            A few facts about our university
                        </h3>
                    </div>
                    <div className="number-boxes">
                        <div className="left-boxes">
                            <FactBox boxGoal="94" boxLabel="Succesed Students" />
                            <FactBox boxGoal="126" boxLabel="Current Teachers" />
                        </div>
                        <div className="right-boxes">
                            <FactBox boxGoal="2345" boxLabel="New Students" />
                            <FactBox boxGoal="32" boxLabel="Awards" />
                        </div>
                    </div>
                </div>
                <div className="video-facts">
                    <a 
                    href="https://www.youtube.com/watch?v=HndV87XpkWg&ab_channel=TheSchoolofLife"
                    target="_blank" 
                    rel="noreferrer"
                    >
                        <img src={imageVideo} alt="" />
                    </a>
                </div>
            </div>
        </div>
  )
}

export default UniversityFacts