import { useState, useEffect, useRef } from "react"
const FactBox = (props) => {
  const [boxNumber, setBoxNumber] = useState(0)
  const number = useRef()
  const boxRef = useRef()

  useEffect(() => {
    let started = false
    const scrolling =  function() {
        if(window.scrollY > number.current.offsetTop - 600) {
            if(!started) {
              increament(boxRef.current)
            }
            started = true
        }
    }

    window.addEventListener("scroll", scrolling)

    return () => {
        window.removeEventListener("scroll", scrolling)
    }
  }, [])  

  const increament = box => {
    let goal = parseInt(box.dataset.goal)
    let count = setInterval(() => {
        if(Number(box.textContent.split("").filter(e => e !== "%").join("")) < goal) {
            setBoxNumber(prev => prev + 1)
        } else {
            clearInterval(count);
        }
    }, 2000 / goal)
}

  return (
    <div className="number-box" ref={number}>
        <span className="number" data-goal={props.boxGoal} ref={boxRef}>
            {props.boxLabel === "Succesed Students" ? `${boxNumber}%` : boxNumber}
        </span>
        <p className="label">
            {props.boxLabel}
        </p>
    </div>
  )
}

export default FactBox

