import React, { useContext, useState, useRef } from 'react';
import { Card, Button, InputGroup, Form, Row, Col, Image } from 'react-bootstrap';
import { DateIcon, MapIcon } from '../assets';
import { useNavigate } from 'react-router-dom';
import { VehicleContext } from '../context/context';
import BookPage from '../pages/BookPage';

export const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const { updateBranchDate } = useContext(VehicleContext);
    const navigate = useNavigate();

    const [newAppointmentPlace, setNewAppointmentPlace] = useState("");
    const [newAppointmentDate, setNewAppointmentDate] = useState("");
    const [newAppointmentTime, setNewAppointmentTime] = useState("");

    const dateList = [];

    const calculateWeekFromDate = () => {
        const today = new Date();
        const nextDay = new Date(today);


        for (let i = 0; i < 7; i++) {
            nextDay.setDate(today.getDate() + i);

            // Define arrays for day names and month names
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Get day, date, and month names
            const dayName = daysOfWeek[nextDay.getDay()];
            const date = nextDay.getDate();
            const monthName = monthsOfYear[nextDay.getMonth()];

            // Format the date as "Day, Date Month"
            const formattedDate = {
                dayName: dayName,
                month_date: ` ${date} ${monthName}`
            };
            dateList.push(formattedDate)
        }
    };

    calculateWeekFromDate();

    const steps = [
        {
            title: 'Select branch and date',
        },
        {
            title: 'Select a time',
        }
    ];



    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        updateBranchDate(newAppointmentPlace, newAppointmentDate, newAppointmentTime);
        navigate('/book/1');
    }

    return (
        <div className='text-center'>

            {currentStep > 0 && (
                <>
                    <Row className='appointment-summary'>
                        <Col sm={12} lg={6} className='mb-3'>
                            <Card className='border border-0 rounded rounded-0 bg-main-gray text-black-50 w-full py-4'>
                                <Card.Body className=''>
                                    <Row>
                                        <Col sm={12} lg={8} className="mx-auto text-start">
                                            <Card.Title>
                                                <strong>Appointment summary</strong>
                                            </Card.Title>
                                            <Card.Text>
                                                <div className='text-black-50 mb-2'><Image src={MapIcon} width="20" className='me-2' /><strong>Branch: </strong><span>{newAppointmentPlace}</span></div>
                                                <div className='text-black-50 mb-2'><Image src={DateIcon} width="20" className='me-2' /><strong>Date: </strong><span>{newAppointmentDate}</span></div>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} lg={6} className='mb-3'>
                            <Card className='border border-0 rounded rounded-0 bg-main-gray text-black-50 w-full text-start px-5'>
                                <Card.Body>
                                    <Card.Title>
                                        <strong>{newAppointmentPlace}</strong>
                                    </Card.Title>
                                    <Card.Text>
                                        POD building on car park <br />Broadway Retail Park<br />Cricklewood Lane<br />London<br /> NW2 1ES  </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className='stepper-title mb-3 text-start'>Select A Time</div>
                    <Row className='date-button-group'>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:00")} active={newAppointmentTime == "10:00" ? true : false}>10:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:20")} active={newAppointmentTime == "10:20" ? true : false}>10:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:40")} active={newAppointmentTime == "10:40" ? true : false}>10:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:00")} active={newAppointmentTime == "11:00" ? true : false}>11:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:20")} active={newAppointmentTime == "11:20" ? true : false}>11:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:40")} active={newAppointmentTime == "11:40" ? true : false}>11:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:00")} active={newAppointmentTime == "12:00" ? true : false}>12:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:20")} active={newAppointmentTime == "12:20" ? true : false}>12:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:40")} active={newAppointmentTime == "12:40" ? true : false}>12:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:00")} active={newAppointmentTime == "13:00" ? true : false}>13:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:20")} active={newAppointmentTime == "13:20" ? true : false}>13:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:40")} active={newAppointmentTime == "13:40" ? true : false}>13:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:00")} active={newAppointmentTime == "14:00" ? true : false}>14:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:20")} active={newAppointmentTime == "14:20" ? true : false}>14:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:40")} active={newAppointmentTime == "14:40" ? true : false}>14:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:00")} active={newAppointmentTime == "15:00" ? true : false}>15:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:20")} active={newAppointmentTime == "15:20" ? true : false}>15:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:40")} active={newAppointmentTime == "15:40" ? true : false}>15:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:00")} active={newAppointmentTime == "16:00" ? true : false}>16:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:20")} active={newAppointmentTime == "16:20" ? true : false}>16:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:40")} active={newAppointmentTime == "16:40" ? true : false}>16:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:00")} active={newAppointmentTime == "17:00" ? true : false}>17:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:20")} active={newAppointmentTime == "17:20" ? true : false}>17:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:40")} active={newAppointmentTime == "17:40" ? true : false}>17:40</Button></Col>
                    </Row>
                    <Button onClick={handlePrevious} className='stepper-button w-50 bg-yellow mx-auto border border-0'>CONTINUE</Button>
                </>
            )}

            {currentStep < steps.length - 1 && (
                <>
                    <div>
                        <Card className="ValuationCard text-center p-4 mb-3 border border-0 shadow">
                            <Card.Body>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="text-start vehicle-info">
                                        <div className="vehicle-info-title">Vehicle information</div>
                                        <div className="vehicle-info-text">Features, equipment & ownership</div>
                                    </div>
                                    <Button className="bg-main-black-50 border border-0 start-button w-50">START</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className='stepper-title mb-3 text-start'>Select branch and date</div>
                        <Form.Group className="mb-3 text-start">
                            <InputGroup className="mb-3 branch-date">
                                <Form.Control className='w-25' value={newAppointmentPlace} onChange={(e) => setNewAppointmentPlace(e.target.value)} />
                                {/* <Form.Control type='number' /> */}
                            </InputGroup>
                        </Form.Group>

                        <Row className='date-button-group'>
                            {
                                dateList.map((item, index) => (
                                    <Col sm={6} md={4} lg={3} key={index}><Button className='bg-main-gray border border-0 w-100 mb-3' onClick={() => setNewAppointmentDate(`${item.dayName}, ${item.month_date}`)}>{item.dayName}<br /><strong>{item.month_date}</strong></Button></Col>
                                ))
                            }
                        </Row>
                    </div>

                    <Button onClick={handleNext} className='stepper-button w-50 bg-yellow mx-auto border border-0'>CONTINUE</Button>
                </>
            )}
        </div>
    );
};

export const ManageStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const inputRef = useRef(null);
    const { updateBranchDate } = useContext(VehicleContext);
    const navigate = useNavigate();

    const [newAppointmentPlace, setNewAppointmentPlace] = useState("");
    const [newAppointmentDate, setNewAppointmentDate] = useState("");
    const [newAppointmentTime, setNewAppointmentTime] = useState("");

    const dateList = [];

    const calculateWeekFromDate = () => {
        const today = new Date();
        const nextDay = new Date(today);


        for (let i = 0; i < 7; i++) {
            nextDay.setDate(today.getDate() + i);

            // Define arrays for day names and month names
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Get day, date, and month names
            const dayName = daysOfWeek[nextDay.getDay()];
            const date = nextDay.getDate();
            const monthName = monthsOfYear[nextDay.getMonth()];

            // Format the date as "Day, Date Month"
            const formattedDate = {
                dayName: dayName,
                month_date: ` ${date} ${monthName}`
            };
            dateList.push(formattedDate)
        }


    };
    calculateWeekFromDate();


    const steps = [
        {
            title: 'Select branch and date',
        },
        {
            title: 'Select a time',
        }
    ];

    const handlePrevious = () => {
        updateBranchDate(newAppointmentPlace, newAppointmentDate, newAppointmentTime);
    }

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
        updateBranchDate(newAppointmentPlace, newAppointmentDate, newAppointmentTime);
        navigate('/book/1');
    };

    return (
        <div className='text-center'>
            {steps[currentStep].content}

            {currentStep > 0 && (
                <>
                    <BookPage />
                    <Button onClick={handlePrevious} className='stepper-button w-50 bg-yellow mx-auto border border-0 d-none'>SEE CAR APPLICATION</Button>
                </>
            )}

            {currentStep < steps.length - 1 && (
                <div>
                    <div className='Section-title'>Book Appointment</div>
                    <div className='Section-desc'>Here you can let us know about any vehicle damage and update your assumptions</div>
                    <div className='stepper-title mb-3 text-start'>Select branch and date</div>
                    <InputGroup className="mb-3 branch-date">
                        <Form.Control aria-label="First name" className='w-25' ref={inputRef} value={newAppointmentPlace} onChange={(e) => setNewAppointmentPlace(e.target.value)} />
                        {/* <Form.Control aria-label="Last name" type='number' /> */}
                    </InputGroup>
                    <Row className='date-button-group'>
                        {
                            dateList.map((item, index) => (
                                <Col sm={6} md={4} lg={3} key={index}><Button className='bg-main-gray border border-0 w-100 mb-3' onClick={() => setNewAppointmentDate(`${item.dayName}, ${item.month_date}`)}>{item.dayName}<br /><strong>{item.month_date}</strong></Button></Col>
                            ))
                        }

                    </Row>
                    <hr />
                    <div className='stepper-title mb-3 text-start'>Select A Time</div>
                    <Row className='date-button-group'>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:00")} active={newAppointmentTime == "10:00" ? true : false}>10:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:20")} active={newAppointmentTime == "10:20" ? true : false}>10:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("10:40")} active={newAppointmentTime == "10:40" ? true : false}>10:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:00")} active={newAppointmentTime == "11:00" ? true : false}>11:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:20")} active={newAppointmentTime == "11:20" ? true : false}>11:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("11:40")} active={newAppointmentTime == "11:40" ? true : false}>11:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:00")} active={newAppointmentTime == "12:00" ? true : false}>12:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:20")} active={newAppointmentTime == "12:20" ? true : false}>12:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("12:40")} active={newAppointmentTime == "12:40" ? true : false}>12:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:00")} active={newAppointmentTime == "13:00" ? true : false}>13:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:20")} active={newAppointmentTime == "13:20" ? true : false}>13:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("13:40")} active={newAppointmentTime == "13:40" ? true : false}>13:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:00")} active={newAppointmentTime == "14:00" ? true : false}>14:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:20")} active={newAppointmentTime == "14:20" ? true : false}>14:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("14:40")} active={newAppointmentTime == "14:40" ? true : false}>14:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:00")} active={newAppointmentTime == "15:00" ? true : false}>15:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:20")} active={newAppointmentTime == "15:20" ? true : false}>15:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("15:40")} active={newAppointmentTime == "15:40" ? true : false}>15:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:00")} active={newAppointmentTime == "16:00" ? true : false}>16:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:20")} active={newAppointmentTime == "16:20" ? true : false}>16:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("16:40")} active={newAppointmentTime == "16:40" ? true : false}>16:40</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:00")} active={newAppointmentTime == "17:00" ? true : false}>17:00</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:20")} active={newAppointmentTime == "17:20" ? true : false}>17:20</Button></Col>
                        <Col sm={4} md={3} lg={2}><Button className='bg-white border border-black border-1 w-100 mb-3' onClick={() => setNewAppointmentTime("17:40")} active={newAppointmentTime == "17:40" ? true : false}>17:40</Button></Col>
                    </Row>
                    <Button onClick={handleNext} className='stepper-button w-50 bg-yellow mx-auto border border-0'>CONTINUE</Button>
                </div>
            )}
        </div>
    );
}

