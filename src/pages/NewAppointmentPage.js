import { Container, Row, Col, Card, Image, Button, Form, InputGroup } from "react-bootstrap";
import { WorkFlowBanner } from "../components/banners";
import { DateIcon, MapIcon } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { VehicleContext, backendUrl } from "../context/context";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewAppointmentPage() {
    const { updateLoading } = useContext(VehicleContext);
    const { ref_number } = useParams();

    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentAddress, setAppointmentAddress] = useState('');

    const navigate = useNavigate();

    const getData = () => {
        updateLoading(true);
        const queryParams = {
            ref_number: ref_number
        }
        axios.get(`${backendUrl}/api/getAppointmentDataByRefNum`, { params: queryParams })
            .then(response => {
                updateLoading(false);
                setAppointmentAddress(response.data.data[0]['postcode']);
                setAppointmentTime(response.data.data[0]['appointment_time']);
                setAppointmentDate(response.data.data[0]['appointment_date']);
                console.log(response.data.data[0]);
            })
            .catch(error => {
                updateLoading(false);
            });
    }

    const updateAppointment = () => {
        // update database
        const queryParams = {
            ref_number: ref_number,
            appointmentAddress: appointmentAddress,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        }
        axios.post(`${backendUrl}/api/updateAppointmentByCustomer`, queryParams)
        .then(response => {

        })
        .catch(error => {

        });
        navigate('/');
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="AppointmentPage py-5">
            <Container>
                <Row>
                    <Col sm={12} md={4} className="mx-auto">
                        <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                            <Form.Label>Appointment Address</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder=""
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    value={appointmentAddress}
                                    onChange={(e) => setAppointmentAddress(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput2">
                            <Form.Label>Appointment Date</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder=""
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput3">
                            <Form.Label>Appointment Time</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder=""
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={updateAppointment}>
                                Update Appointment
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <WorkFlowBanner />
        </div>
    )
}