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
                                    //////////////////
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Is there any damage to the paint or bodywork?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['BodyWork']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>How many panels are damaged?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['PanelDamageCount']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Largest Damages(1: Stone Chips, 2: Small scratch, 3: Scratch, 4:Small dent, 5: Large dent - below door
                                            , 6: Large dent - roof, 7: Large dent - other, 8: Cracked or insecure bumper, 9: Rust, 10: Previous poor repair)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['DamageTypes']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Is there any windscreen or rear window damage?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WindScreen']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Chipped or Cracked driver side</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['CrackedDriverSide']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Chipped or cracked passenger side</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['CrackedPassengerSide']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Cracked or chipped rear window</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['CrackedRearWindow']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Is it large than a 5p coin?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['Large5pCoin']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Are any of the following warning lights on?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['DashWarningLight']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Dash Max Mileage</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['DashMaxMiles']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Service Due</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['ServiceDue']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Oil Warning</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['OilWarning']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Engine Management</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['EngineManagement']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Airbag Warning</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['AirbagWarning']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>ABS</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['ABS']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Any damage to your allow wheels, wheel trims or tyres?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['Wheels']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>How many alloys are scuffed?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['AlloyScuffed']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>How many tyres are below the 1.6mm tyre tread limit and need replacing?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['TyreTradeLimit']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Are there any problems with mirrors?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['Mirrors']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Mirror Electronics Faulty</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['MirrorFaulty']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Mirror Glass (0: One scratched or missing, 1: Both scratched or missing)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['MirrorGlass']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Mirror Cover (0: One scratched or missing, 1: Both scratched or missing)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['MirrorCover']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Any seat, carpet or upholstery damage?</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['Interior']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has Stains</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['HasStains']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has Tears</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['HasTears']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has Burns</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['HasBurns']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>I don't have a private plate to keep</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapPrivatePlate']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>This car comes with two keys</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapTwoKeys']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has over 3 months MOT</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapOverMOT']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has V5C logbook</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapLogbook']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Is not a category S/C or N/D</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapSC']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>No missing parts</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapMissingPart']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>No faulty electrics</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapFaultyElectrics']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>No mechanical issues</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapMechanicalIssues']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>No modifications</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapNoModification']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>No mileage alterations</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapNoMileageAlteration']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>is not imported</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapIsNotImported']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>is right-hand drive</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapRightHandDrive']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Not ex-driving school</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapExDriveSchool']}
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2_19">
                                        <Form.Label>Has not been used for Taxi/Private hire</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={currentValue['WrapTaxi']}
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
