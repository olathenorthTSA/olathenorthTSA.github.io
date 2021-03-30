import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React, { Component, useState } from 'react'


// import Navigation from './Navigation.js';


//react-bootstrap stuff
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function Header() {
    return (
        <Jumbotron fluid>
            <h1>Career Technical Education</h1>
        </Jumbotron>
    );

}
function List(props) {
    return <li>{props.list}</li>;
}

function CourseModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See Classes
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Classes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <List /> */}
                    {props.text}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


function Course() {
    const construction = [
        'Engineering Drafting / CAD I',
        'Engineering Drafting / CAD II',
        'Interior Design II',
        'Introduction to Technology Education',
        'Production Design Principles I',
        'Production Design Principles II',
        'Research & Design for Architecture I',
        'Research & Design for Architecture II'];
    const digital = [
        'Business Essentials',
        'Computer Applications I',
        'Computer Applications II',
        'Digital Media Technology: Yearbook',
        'Editorial Leadership Design & Production',
        'Graphic Design I',
        'Graphic Design II',
        'Introduction to Journalism',
        'Media & Public Relations: Newspaper',
        'Photojournalism',
        'Video Production I',
        'Video Production II'
    ];

    const fashion = [
        'Apparel Production I',
        'Apparel Production II',
        'Career Connections',
        'Career & Life Planning',
        'Essentials of Fashion, Apparel, Interior Design (FAID)',
        'FAID Studio',
        'Fashion Trends I',
        'Fashion Trends II',
        'Interior Design I',
        'Interior Design II'
    ];

    const health = [
        'Anatomy & Physiology',
        'Biology',
        'Care of Athletes',
        'Chemistry',
        'Nutrition & Wellness',
        'Sports Medicine I',
        'Sports Medicine II'
    ];

    const bus = [
        'Business Essentials',
        'Business Economics',
        'Business Law',
        'Consumer & Personal Finance',
        'Entrepreneurship',
        'Accounting I',
        'Accounting II',
        'Principles of Marketing I',
        'Principles of Marketing II',
        'Principles of Marketing II',
        'Web Design I',
        'Web Design II'
    ];

    const program = [
        'AP Computer Science A',
        'Computer Applications I',
        'Computer Applications II ',
        'Computer Programming I ',
        'Computer Programming II ',
        'Introduction to Computer Coding ',
        'Web Design I ',
        'Web Design II '
    ];
    return (
        <div class="course">
            <Row>
                <h1>Olathe North</h1>
            </Row>
            <Row>
                <Col sm>
                    <h5>Construction & Design</h5>
                    <CourseModal text={construction.map((message) => <List key={message} list={message} />)} />
                </Col>

                <Col sm>
                    <h5>Digital Media</h5>
                    <CourseModal text={digital.map((message) => <List key={message} list={message} />)} />
                </Col>



            </Row>

            <Row>
                <Col sm>
                    <h5> Fashion, Apparel, Interior Design (FAID)</h5>
                    <CourseModal text={fashion.map((message) => <List key={message} list={message} />)}
                    />

                </Col>


                <Col sm>
                    <h5>Health Science</h5>
                    <CourseModal text={health.map((message) => <List key={message} list={message} />)}
                    />


                </Col>
            </Row>

            <Row sm>
                <Col sm>
                    <h5>Business, Finance, & Marketing</h5>
                    <CourseModal text={bus.map((message) => <List key={message} list={message} />)}
                    />


                </Col>

                <Col sm>
                    <h5>Programming & Software Development </h5>
                    <CourseModal text={program.map((message) => <List key={message} list={message} />)}
                    />

                </Col>


            </Row>


        </div>
    );

}

function Teachers() {
    return (
        <div class="teacher">
            <Row sm>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/app/pic/wagner.png" />
                        <Card.Body>
                            <Card.Title>Michael Wagner </Card.Title>
                            <Card.Text>
                                Construction & Design Teacher
                    </Card.Text>
                            <Button variant="primary">
                                <a href='mailto: mwagneron@olatheschools.org'>Contact</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/app/pic/waldron.png" />
                        <Card.Body>
                            <Card.Title>Melinda Waldron </Card.Title>
                            <Card.Text>
                                Digital Media Teacher
                    </Card.Text>
                            <Button variant="primary">
                                <a href='mailto: mwaldronon@olatheschools.org '>Contact</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row sm>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/app/pic/lane.png" />
                        <Card.Body>
                            <Card.Title>John Lane </Card.Title>
                            <Card.Text>
                                Digital Media Teacher
                    </Card.Text>
                            <Button variant="primary">
                                <a href='mailto: jlaneon@olatheschools.org '>Contact</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/app/pic/palmisano.png" />
                        <Card.Body>
                            <Card.Title>Stacie Palmisano </Card.Title>
                            <Card.Text>
                                Business & Technology Teacher
                    </Card.Text>
                            <Button variant="primary">
                                <a href='mailto:spalmisanoon@olatheschools.org '>Contact</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/app/pic/brock.png" />
                        <Card.Body>
                            <Card.Title>Raschel Brock </Card.Title>
                            <Card.Text>
                                Business & Technology Teacher
                    </Card.Text>
                            <Button variant="primary">
                                <a href='mailto:rbrockon@olatheschools.org '>Contact</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

function Facilities() {
    return (
        <>
            <Row><h1>Facilities</h1></Row>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/app/pic/fone.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Computer Programming Lab</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/app/pic/ftwo.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>CAD/Drafting Room</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/app/pic/fthree.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Woodworking Lab</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/app/pic/ffour.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Digital Media Lab</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );


}

function Olathe() {
    const collision = [
        'Auto Collision I: Auto Collision I',
        'Auto Collision I: Auto Refinishing Comprehensive',
        'Auto Collision I: Custom Refinishing A',
        'Auto Collision II: Auto Collision II ',
        'Auto Collision II: Custom Refinishing B',
        'Auto Collision II: Custom Refinishing B',
    ];

    const auto = [
        'Auto Technology I: Steering/Suspension',
        'Auto Technology I: Advanced Steering/Suspension',
        'Auto Technology I: Alternative Power',
        'Auto Technology I: Advanced Brakes',
        'Auto Technology I: Advanced Brakes',
        'Auto Technology I: Brakes',
        'Auto Technology I: Drive Train Technology',
        'Auto Technology II: Fund of Electronic/Electrical Systems',
        'Auto Technology II: Mobile HVAC',
        'Auto Technology II: Engine Mechanical Repair',
        'Auto Technology II: Advanced Electronics/Electrical Systems ',
    ];

    const animal = [
        'Animal Science I: Animal Science',
        'Animal Science I: Small Animal Care',
        'Animal Science II: Animal Health/Vet Tech',
        'Animal Science II: Advanced Animal Science ',
        'Animal Science II: Animal Science Internship',
        'Animal Science II: Research in Animal Science',
        'Animal Science II: Ag Business',
    ];

    const weld = [
        'Welding Tech I: Manufacturing Processes',
        'Welding Tech I: Production Welding Processes I ',
        'Welding Tech I: Mass Production I  ',
        'Welding Tech II: Mass Production II ',
        'Welding Tech II: Production Welding Processes II ',
        'Welding Tech II: R&D for Manufacturing',
    ];

    const avi = [
        'Aviation Electronics I: Foundation of Electronics',
        'Aviation Electronics I: Aviation Fundamentals',
        'Aviation Electronics I: Hand & Power Tools',
        'Aviation Electronics I: Digital Electronics',
        'Aviation Electronics II: AC Electronics',
        'Aviation Electronics II: DC Electronics',
        'Aviation Electronics II: Integrated Circuits ',
        'Aviation Electronics II: Microcontrollers ',
        'Aviation Electronics II: Design & Engineering Workplace Experience ',
    ];

    const construct = [
        'Construction Trades I: Carpentry I ',
        'Construction Trades I: Plumbing Technology ',
        'Construction Trades I: Production Print Reading ',
        'Construction Trades I: Skilled Mechanical Trades ',
        'Construction Trades II: Carpentry II ',
        'Construction Trades II: Electrical & Security Systems  ',
        'Construction Trades II: Research & Design in Building Trades  ',
        'Construction Trades II: Remodel & Building Maintenance  ',
        'Construction Trades II: Workplace Experience in A&C ',
    ];

    const ems = [
        'Basic Life Support for Healthcare Providers',
        'Emergency Medical Services (EMS)',
        'Fundamentals of EMS',
        'Emergency Medical Specialties (EMS): Healthcare Standards for EMS ',
    ];

    const care = [
        'Healthcare Sciences I: Introduction to Healthcare',
        'Healthcare Sciences I: Medical Terminology',
        'Healthcare Sciences II: Health Information Technology-HIT',
        'Healthcare Sciences I: Certified Nurse Assistant-CNA',
        'Healthcare Sciences II: Phlebotomy Technician',
        'Healthcare Sciences II: Pharmacy Technician',
        'Healthcare Sciences II: Home Health Aide-HHA',
    ];
    return (
        <div class="oatc">
            <Row>
                <h1>Olathe School District</h1>

            </Row>
            <Row>
                <Col>
                    <h2>About Career Pathways</h2>
                    <Row>

                        <p>Students can explore a variety of options including Career and Technical Education (CTE) Pathways,
                        Performing and Visual Arts, Advanced Technical programs at OATC and 21st Century Academies.
                        All of these options focus on today’s high demand career fields
                        and help prepare students for the world of work by combining student interest
                        with student learning through hands-on experiences, industry standard resources,
                        and real-world partnerships fusing academic and technical skills, knowledge and training necessary for future careers.</p>
                    </Row>
                </Col>

            </Row>
            <Row><h1>OATC Programs</h1></Row>
            <Row sName="oatc">
                <div class="box">
                    <Col>
                        <h5>Auto Collision</h5>

                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">

                                <p>
                                    The Auto Collision Technology program prepares students for a variety
                                    of career opportunities in auto repair and customization and will learn
                                    through hands-on experiences with industry standard equipment including a down-draft paint booth.
                                </p>


                            </Accordion.Collapse>
                        </Accordion>

                        <CourseModal text={collision.map((message) => <List key={message} list={message} />)} />

                    </Col>
                </div>
                <Col class="box">
                    <h5>Auto Technology</h5>

                    <Accordion>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <p>Learn More</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Row>
                                <p>The Auto Technology program offers students the opportunity
                                to discover the automotive industry through hands-on labs,
                                unique partnerships and competition.
                                The program works with industry standard equipment and develops skills through
                                     application of theory using modern electronic testing equipment</p>
                            </Row>

                        </Accordion.Collapse>
                    </Accordion>


                    <CourseModal text={auto.map((message) => <List key={message} list={message} />)} />
                </Col>

                <Col class="box">
                    <h5>Animal Science & Research</h5>

                    <Accordion>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <p>Learn More</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Row>
                                <ul>
                                    <li>Become proficient in animal handling techniques and the component of small animal care.</li>
                                    <li>Learn the basic needs of animals and the things we do to protect them.</li>
                                    <li>Explore the anatomy and physiology of animals across species and learn how heir body systems impact health, growth and performance.</li>
                                    <li>Learn why preserving agriculture is so important for our future.</li>
                                    <li>Learn about agricultural entrepreneurship and how to raise, market and sell goods.</li>
                                </ul>
                            </Row>

                        </Accordion.Collapse>
                    </Accordion>


                    <CourseModal text={animal.map((message) => <List key={message} list={message} />)} />

                </Col>

                <Col class="box">
                    <h5>Welding Technology</h5>
                    <div>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Row>
                                    The Welding Program is a career-minded course that specializes in the manufacturing of
                                    metal components with a major emphasis in welding. Welding is a unique occupation which
                                    combines the skills of a craftsman, the dexterity of an artist, the knowledge of a scientist,
                                    and the pride of a true professional.
                                </Row>

                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <CourseModal text={weld.map((message) => <List key={message} list={message} />)} />

                </Col>

            </Row>
            <Row class="oatc">
                <Col class="box">
                    <h5>Aviation Electronics</h5>
                    <div>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <p>
                                    The Aviation Electronics program helps prepare students with the knowledge
                                    and skills necessary for continued education and, ultimately, a successful
                                    career in Aviation Maintenance occupations. Electronics technicians apply
                                    electronic theory, electrical testing procedures and related knowledge to
                                    lay-out, build, test, troubleshoot, repair, and overhaul electronic equipment.
                                    A technician might service the industrial controls on a factory floor, repair
                                    missile control systems for the government or specialize in cars and trucks,
                                    installing and repairing sound and alarm systems.

                                    Wherever your future takes you, you’ll be working with computer programs,
                                    automated systems, and, of course, electricity. Many industries today,
                                    from manufacturing to telecommunications, depend on electrical equipment
                                    — as well as the people who keep that equipment running safely and efficiently.
                                </p>

                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <CourseModal text={avi.map((message) => <List key={message} list={message} />)} />
                </Col>

                <Col class="box">
                    <h5>Construction Trades</h5>
                    <div>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <p>
                                    The Construction Trades program provides students with hands-on construction experience as they
                                    participate in the completion of an off-site construction project. Students will spend the majority
                                    of their class time working in the shop at the job site.
                                </p>

                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <CourseModal text={construct.map((message) => <List key={message} list={message} />)} />

                </Col>

                <Col class="box">
                    <h5>EMS</h5>
                    <div>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Row>
                                    This pathway prepares students with the knowledge and skills necessary for continued education
                                    and, ultimately, a successful career in emergency services. Emergency services workers help
                                    protect the public by rapidly responding to a variety of emergencies. They are frequently
                                    the first emergency personnel at the scene of a traffic accident or medical emergency and
                                    may be called upon to, treat injuries or perform other vital functions.
                                </Row>

                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <CourseModal text={ems.map((message) => <List key={message} list={message} />)} />

                </Col>

                <Col class="box">
                    <h5>Healthcare Sciences</h5>
                    <div>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Learn More</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Row>
                                    <ul>
                                        <li>Learn about the prevention, diagnosis and treatment of disease, illness, injury, and other physical and mental impairments in people.</li>
                                        <li>Learn how care is delivered by health professionals in allied health fields.</li>
                                        <li>Become eligible to sit for the Kansas State Board exam for C.N.A.</li>
                                        <li>Earn certifications in Certified Nurse Assistant, Home Health Aide, Phlebotomy Tech, and Pharmacy Tech.</li>
                                    </ul>

                                </Row>

                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <CourseModal text={care.map((message) => <List key={message} list={message} />)} />
                </Col>
            </Row>
        </div >
    );

}


function Footer() {
    return (
        <div class="footer">
            <Row>
                <p>Property of ON TSA Chapter 2021</p>
                <p>React-Bootstrap framework</p>
                <p>Information taken from olatheschools.org</p>
            </Row>
        </div>
    );
}

class Cte extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Course />
                <Teachers />
                <Facilities />
                <Olathe />
                <Footer />

            </div >

        );
    }

}
export default Cte;

