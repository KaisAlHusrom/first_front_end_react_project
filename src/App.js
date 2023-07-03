import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {
            SubHeader,
            Header, 
            Container, 
            Footer
        } from "./sections"

import {MainPage, MeetingPage} from "./pages";


const App = _ => {
    return (
        <>
            <Router>
                <SubHeader></SubHeader>
                <Header></Header>
                <Container>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route exact path="/meetings/*" element={<MeetingPage />} />
                    </Routes>
                </Container>
                <Footer></Footer>
            </Router>
        </>
    )
}

export default App