import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { WorkFlowBanner } from "../components/banners";
import { DateIcon, MapIcon } from "../assets";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { VehicleContext, backendUrl } from "../context/context";
import axios from 'axios';

export default function AppointmentPage() {
    const { vehicleNumber, updateLoading } = useContext(VehicleContext);

    const [appointmentData, setAppointmentData] = useState([]);

    const getData = () => {
        updateLoading(true);
        const queryParams = {
            reg: vehicleNumber
        }
        axios.get(`${backendUrl}/api/getAppointmentData`, { params: queryParams })
            .then(response => {
                updateLoading(false);
                setAppointmentData(response.data.data);
            })
            .catch(error => {
                updateLoading(false);
            });
    }
    useEffect(() => (
        getData()

    ), [])

    return (
        <div className="AppointmentPage py-5">
            <section>
                <div className="Section-title text-center">Manage Appointment</div>
                <div className="Section-desc text-center">Here you can track and mange appointments for each transaction.</div>
                {
                    vehicleNumber != "" ? (
                        <Container>
                            <hr />
                            <ul className="Appointment-list">
                                {appointmentData.map((item, index) => (
                                    <li className="Appointment-list-item" key={index}>
                                        <Row className='appointment-summary'>
                                            <Col sm={12} lg={6} className='mb-3'>
                                                <Card className='border border-0 rounded rounded-0 bg-main-gray text-black-50 w-full py-5'>
                                                    <Card.Body className=''>
                                                        <Row>
                                                            <Col sm={12} lg={6} className="mx-auto">
                                                                <Card.Title>
                                                                    <strong>Appointment summary</strong>
                                                                </Card.Title>
                                                                <Card.Text>
                                                                    <div className='text-black-50 mb-2'><Image src={MapIcon} width="20" className='me-2' /><strong>Branch: </strong><span>{item.appointment_place}</span></div>
                                                                    <div className='text-black-50 mb-2'><Image src={DateIcon} width="20" className='me-2' /><strong>Date: </strong><span>{item.appointment_date}</span></div>
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
                                                            <strong>{item.appointment_place}</strong>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            POD building on car park <br />Broadway Retail Park<br />Cricklewood Lane<br />London<br /> NW2 1ES
                                                        </Card.Text>
                                                        <div className="text-end">
                                                            <Button className="text-white bg-black border border-0 rounded rounded-0 fw-bold py-1">Get Direction</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <div className="text-center">
                                <Link to="/appointment/1" className="nav-link"><Button className="bg-yellow border border-0 book-appointment-button mt-5 w-75">BOOK APPOINTMENT</Button></Link>
                            </div>
                        </Container>
                    ) : (
                        <Container>
                            <hr />
                            <ul className="Appointment-list">
                                <li className="Appointment-list-item">
                                    <Row className='appointment-summary'>
                                        <Col className="text-center fs-1 fw-bold">No Active Appointments</Col>
                                    </Row>
                                </li>
                            </ul>
                            <hr />
                        </Container>
                    )
                }

            </section>
            <WorkFlowBanner />
        </div>
    )
}
