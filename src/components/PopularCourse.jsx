const PopularCourse = (props) => {
    let stars = []
    for(let i = 0; i<5; i++) {
        if (stars.length < props.course.rate) {
            stars.push(<i key={i}className="fa-solid fa-star"></i>)
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    }


    return (
                                <div className='course'>
                                    <div className='course-image'>
                                        <img src={props.course.image} alt=''/>
                                    </div>
                                    <div className='course-name'>
                                        <h3>{props.course.CourseName}</h3>
                                    </div>
                                    <div className='rate-price'>
                                        <div className='rate'>
                                            {
                                                stars.map(star => star)
                                            }
                                        </div>
                                        <div className='price'>
                                            <p>
                                                ${props.course.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
  )
}

export default PopularCourse