import {MainBanner, 
    Services, 
    UpComingMeetings, 
    ApplyNow, 
    PopularCourses, 
    UniversityFacts,
    GetInTouch,
    } from "./../../sections"

const MainPage = () => {
  return (
    <>
                <MainBanner></MainBanner>
                <Services></Services>
                <UpComingMeetings></UpComingMeetings>
                <ApplyNow></ApplyNow>
                <PopularCourses></PopularCourses>
                <UniversityFacts></UniversityFacts>
                <GetInTouch></GetInTouch>
    </>
  )
}

export default MainPage