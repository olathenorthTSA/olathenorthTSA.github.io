import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM, { render } from 'react-dom';
// const App = React.lazy(() => import('./components/App'));
import React1, { Suspense } from 'react';
import $ from 'jQuery';
import Popper from 'popper.js';
import Cte from './Cte.js';
import App from './App.js';
import Navigation from './Navigation.js'


//react-bootstrap stuff
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



function Jumbo() {
    return (
        //     <div>
        //         <Router>
        //             <div>
        //                 <Navbar bg="dark" expand="lg">
        //                     <Navbar.Brand as={Link} to="/tsa">TSA</Navbar.Brand>
        //                     <Nav.Link as={Link} to="/cte">CTE</Nav.Link>
        //                     <Nav.Link as={Link} to="/">Design Brief</Nav.Link>
        //                 </Navbar>
        //             </div>

        //             <div>
        //                 <Switch>
        //                     <Route path='/tsa'>
        //                         <App />
        //                     </Route>
        //                     <Route path='/cte'>
        //                         <Cte />
        //                     </Route>
        //                     <Route path='/'>

        //                     </Route>
        //                 </Switch>
        //             </div>
        //         </Router>

        <Image src="/app/pic/TSA_LOGO.jpg?text=" fluid />


    );
}


function What() {
    return (
        <Container fluid>
            <Row><h1>TSA</h1></Row>
            <Row>
                <Col>
                    <h2>What is TSA?</h2>
                    <Row>
                        <p>
                            TSA stands for Technology Student Association,
                            a national organization of students engaged in
                            science, technology, engineering and mathematics
                            (STEM). Through a range of competitive events and
                            leadership opportunities, TSA members can explore
                            interdisciplinary education. From engineers to business managers,
                            numerous alumni credit TSA with a positive influence on their lives.
                            TSA members have the opportunity to compete at state conferences
                            and at the annual National Conference. Expert judging by technology
                            educators and industry representatives inspires the best from participants.
                            Members are awarded not only with medals and trophies but also with memories of innovation and collaboration.
                        </p>
                        <Accordion>

                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Read More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Row>
                                    <h5>Who Can Participate?</h5>
                                    <p>
                                        Open to students enrolled in or who have completed technology education
                                        courses, TSA’s membership includes more than 250,000 middle
                                        and high school students across the United States.
                                        TSA is supported by educators, parents, and business
                                        leaders who believe in the need for a technologically literate society.
                                        Members learn through exciting competitive events,
                                        leadership opportunities, and much more.
                                        A wide range of activities makes TSA a positive experience for every
                                        student.
                                    </p>
                                    <br></br>
                                    <h5>Competitions</h5>
                                    <p>
                                        TSA high school competitions and middle school competitionsare
                                        categorized by careers in Architecture and Construction Technology,
                                        Communications Technology, Computer Science and Information
                                        Technology, Leadership, Manufacturing and Transportation Technology,
                                        STEM (General), STEM and the Arts, and Technology and Research.
                                        TSA competitions are
                                        offered in a traditional format in the classroom and virtually.
                                    </p>
                                </Row>

                            </Accordion.Collapse>
                        </Accordion>
                    </Row>
                </Col>

                <Col>
                    <h2>TSA Creed</h2>
                    <Row>
                        <p>
                            I believe that Technology Education holds an important place in my life in the technical world.
                            I believe there is a need for the development of good attitudes concerning work, tools, materials, experimentation, and processes of industry.
                            Guided by my teachers, artisans from industry, and my own initiative,
                            I will strive to do my best in making my school, community, state,
                            and nation better places in which to live.
                            I will accept the responsibilities that are mine.
                            I will accept the theories that are supported by proper evidence.
                            I will explore on my own for safer, more effective methods of working and living.
                            I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals.
                            Through the work of my hands and mind, I will express my ideas to the best of my ability.
                            I will make it my goal to do better each day the task before me,
                            and to be steadfast in my belief in my God, and my fellow Americans.
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container >
    );

}

function On() {
    return (
        <Container fluid>
            <Row> <h1>ON TSA Chapter</h1> </Row>
            {/* ON About & Members */}
            <Row> <h2>2021 ON Chapter</h2> </Row>
            <Row>
                <Col>
                    <h2>About</h2>
                    <Row><p class="descr">
                        Olathe North TSA is a club at Olathe North made up of highly motivated students that love technology.
                        Over the course of the school year, students select various events to participate in based on their interests
                        and dedicate time outside of school to prepare for their events. TSA is run by Michael Wagner, the sponser of the club,
                        as well as the club's officers Alexis Ng, Michelle Chen, and Caleb Lim.
						</p>
                    </Row>
                </Col>
                <Col>
                    <h2>Members</h2>
                    <Row>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="/app/pic/working_wade.jpg?text=First slide&bg=373940"
                                    alt="Working Wade"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="/app/pic/working_ari.jpg?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/app/pic/group_pic.jpg?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Row>

                </Col>

            </Row>

            {/* Calendar */}
            <div>
                <Row><h1>Schedule</h1></Row>
                <Row fluid>
                    <div class="container">
                        <iframe class="responsive-iframe" src="https://calendar.google.com/calendar/embed?wkst=1&amp;ctz=America%2FChicago&amp;src=b250c2EyMDIxQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;title=TSA%20Calendar"></iframe>
                    </div>
                </Row>
            </div>

            {/* History */}
            <Row><h1>History</h1></Row>
            <Row>
                <div class="on_hist_grid">
                    <div class="timeline">
                        <div class="t_container left_tl">
                            <div class="t_content">
                                <h2>1998</h2>
                                <p>Olathe North TSA was founded by Mr. BrittonHart. Under Mr. BrittonHart, Olathe North TSA competed in several TSA events
						and won state and national awards. </p>
                            </div>
                        </div>
                        <div class="t_container right_tl">
                            <div class="t_content">
                                <h2>2001</h2>
                                <p>This is the first year Olathe North TSA participated in a national tournament. Its members competed in CAD Design and
						Children's Stories, placing 2nd in the latter.</p>
                            </div>
                        </div>
                        <div class="t_container left_tl">
                            <div class="t_content">
                                <h2>Mid 2000s</h2>
                                <p>Mr. Wagner took over as the sponser for TSA at Olathe North.</p>
                            </div>
                        </div>
                        <div class="t_container right_tl">
                            <div class="t_content">
                                <h2>Present</h2>
                                <p>Olathe North TSA continues to flourish under Mr. Wagner, enjoying success on the local, state, and national levels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

            {/* <Row><h1>Awards</h1></Row>
            <div class="awa">
                <Row>
                    <Col >
                        <Image class="award" src="/app/pic/grey.jpg" width="100px" roundedCircle />
                        <Row><p>Local</p></Row>
                    </Col>
                    <Col>
                        <Image class="award" src="/app/pic/grey.jpg" width="100px" roundedCircle />
                        <Row><p>State</p></Row>
                    </Col>
                    <Col>
                        <Image class="award" src="/app/pic/grey.jpg" width="100px" roundedCircle />
                        <Row><p>National</p></Row>
                    </Col>
                </Row> */}
            {/* </div> */}
        </Container >
    );
}

function Contact() {
    return (
        <Container fluid>
            <Row>
                <h1>Contact Us</h1>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h5>Alexis Ng, Co-President</h5>
                            <Row>
                                <p>
                                    Bio: Alexis Ng is a senior at Olathe North High School.
                                    Alexis participates in Coding, Prepared Presentation, and Webmasters.
                                </p>
                            </Row>
                            <Row>
                                <Button variant="primary">
                                    <a href="mailto: 802amn26@students.olatheschools.com">Contact</a>
                                </Button>
                            </Row>
                        </Col>
                        <Col>
                            <h5>Caleb Lim, Co-President</h5>
                            <Row>
                                <p>
                                    Bio: Caleb Lim is a senior at Olathe North High School.
                                    Caleb participates in Coding, Engineering Design, and Webmasters.
                                </p>
                            </Row>
                            <Row>
                                <Row>
                                    <Button variant="primary">
                                        <a href="mailto: 467cnl09@students.olatheschools.com">Contact</a>
                                    </Button>
                                </Row>
                            </Row>
                        </Col>
                        <Col>
                            <h5>Michael Wagner, Sponsor</h5>
                            <Row>
                                <p>
                                    Bio: Mr. Wagner teaches CAD, woodworking, and other engineering/architechural classes.
                                    Mr. Wagner took on the role as sponsor in the mid-2000's.
                                </p>
                            </Row>
                            <Row>
                                <Row>
                                    <Button variant="primary">
                                        <a href="mailto: mwagneron@olatheschools.org">Contact</a>
                                    </Button>
                                </Row>
                            </Row>
                        </Col>
                    </Row>

                </Col>


            </Row>

        </Container>
    );

}

function Footer() {
    return (
        <div class="footer">
            <Row>
                <p>Property of ON TSA Chapter 2021</p>
                <p>React-Bootstrap framework</p>
                <p>Information taken from tsaweb.org</p>
            </Row>
        </div>
    );
}

class Tsa extends React.Component {
    render() {
        return (
            <div>
                <Jumbo />
                <What />
                <On />
                <Contact />
                <Footer />
            </div >

        );
    }

}

export default Tsa;