import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { VehicleContext, backendUrl } from "../context/context";
import Modal from 'react-bootstrap/Modal';

export const UserTable = (props) => {

    const { getAdminInfo } = useContext(VehicleContext);
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);

    const [currentValue, setCurrentValue] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [appointmentAddress, setAppointmentAddress] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [refNumber, setRefNumber] = useState('');

    let carResponse;

    const handleClose = () => setShow(false);
    let emailParams = {
        name: '',
        email: '',
        refNumber: '',
        appointmentDate: '',
        appointmentTime: '',
        appointmentAddress: ''
    }
    const handleSendEmail = () => {
        // For sending email, send updated appointment data to the server
        emailParams.name = name;
        emailParams.email = email;
        emailParams.refNumber = refNumber;
        emailParams.appointmentDate = appointmentDate;
        emailParams.appointmentTime = appointmentTime;
        emailParams.appointmentAddress = appointmentAddress;

        setShow(false);
        axios.post(`${backendUrl}/api/admin/editAppointment`, emailParams)
            .then(response => {
                // Handle the successful response here
                if (response.data.status == true) {
                }
            })
            .catch(error => {
                setShow(false);
            });

    }

    const setTableData = () => {
        const adminInfo = getAdminInfo();
        const queryParams = {
            name: adminInfo.name,
            password: adminInfo.password
        };
        axios.post(`${backendUrl}/api/admin/table`, queryParams)
            .then(response => {
                // Handle the successful response here
                if (response.data.status == true) {
                    setData(response.data.data);
                }
                //
            })
            .catch(error => {
                // console.error('Error:', error.message);
            });

    }

    useEffect(() => {
        setTableData();
        setInterval(() => {
            setTableData();
        }, 1000 * 60);
    }, []);

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form style={{height: "400px", overflow: "scroll"}}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_1">
                                        <Form.Label>Registration Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['vehicle_name']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_2">
                                        <Form.Label>Year of Manufacture</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['created_year']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_3">
                                        <Form.Label>Mileage</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['mileage']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_4">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['color']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_5">
                                        <Form.Label>BodyStyle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['bodyStyle']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_6">
                                        <Form.Label>FuelType</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['fuelType']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_7">
                                        <Form.Label>Previous Owners</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['previous_owners']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_8">
                                        <Form.Label>Service history</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['service_history']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_9">
                                        <Form.Label>Service history</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['service_history']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_10">
                                        <Form.Label>Personal Register</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['personal_register']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_11">
                                        <Form.Label>Car Import</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['import_status']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_12">
                                        <Form.Label>Sets of Keys</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['v_key']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_13">
                                        <Form.Label>Non Runner</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['non_runner']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_14">
                                        <Form.Label>Insurance write off</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['insurance']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_15">
                                        <Form.Label>Private hire</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['private_hire']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_16">
                                        <Form.Label>Driving Tuition</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['driving_tuition']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_17">
                                        <Form.Label>Police/Emergency</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['police']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_18">
                                        <Form.Label>Modified winch</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['seats']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Insurance write off</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['damaged']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Appointment Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={appointmentAddress}
                                            onChange={evt => setAppointmentAddress(evt.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Appointment Date</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={appointmentDate}
                                            onChange={evt => setAppointmentDate(evt.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label>Appointment Time</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={appointmentTime}
                                            onChange={evt => setAppointmentTime(evt.target.value)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSendEmail}>
                        Update & Send Email
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="table-responsive">
                <table className="table riped  table-hover table-bordered container text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Vehicle Number</th>
                            <th>Reference Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, key) => {
                                return (
                                    <tr key={key} style={{ cursor: "pointer" }}>
                                        <td>{key + 1}</td>
                                        <td>{value["car_id"]}</td>
                                        <td>{value["ref_number"]}</td>
                                        <td>{value["name"]}</td>
                                        <td>{value["email"]}</td>
                                        <td>{value["postcode"]}</td>
                                        <td>{value["phone"]}</td>
                                        <td>
                                            <Button variant="primary" onClick={async () => {
                                                carResponse = await axios.post(`${backendUrl}/api/admin/getVehicleDataByRefNum`, {
                                                    ref_number: value["ref_number"]
                                                });
                                                carResponse = carResponse.data.data;
                                                console.log('carResponse:', carResponse);
                                                setCurrentValue(carResponse);
                                                setName(value["name"]);
                                                setEmail(value["email"]);
                                                setRefNumber(value["ref_number"]);
                                                setAppointmentAddress(value["postcode"]);
                                                setAppointmentDate(value["appointment_date"]);
                                                setAppointmentTime(value["appointment_time"]);
                                                setShow(true);
                                            }}>Edit
                                            </Button>
                                        </td>
                                    </tr>)
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
