import { Container, Row, Col, Carousel, Form, InputGroup, Button, Image } from "react-bootstrap";
import { MailLineIcon, MapIcon, EditIcon, PhoneLinIcon } from "../assets";
import { useContext, useRef, useState } from "react";
import { VehicleContext, backendUrl } from "../context/context";
import { Loading } from "../components/layouts/loading";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function BookPage() {
    const {
        isLoading,
        vehicleNumber,
        vehicleName,
        createdYear,
        color,
        mileage,
        price,
        bodyStyle,
        fuelType,
        previousOwners,
        serviceHistory,
        personalRegister,
        importStatus,
        vkey,
        nonRunner,
        insurance,
        privateHire,
        drivingTuition,
        police,
        seats,
        damaged,
        //
        zone,
        component,
        fault,
        //
        appointmentPlace,
        appointmentDate,
        appointmentTime,
        imageDetailsList,
        updateUserInfo,
        updateLoading
    } = useContext(VehicleContext);
    const inputRef = useRef(null);

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPostCode, setNewPostCode] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [notEmail, setNotEmail] = useState(false);
    const [notPhone, setNotPhone] = useState(false);

    const navigate = useNavigate();
    // const emailValidator = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const emailValidator = (email) => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const phoneValidator = (input_str) => {
        // var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        // https://regex101.com/r/m0ak0K/1
        // const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
        // FOR UK phone numbers;
        // https://callhippo.com/blog/general/uk-phone-number-format
        // https://www.regextester.com/104299
        const PHONE_REGEX = new RegExp(/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g);
        return PHONE_REGEX.test(input_str);
      }
    const submitButton = () => {
        if (!emailValidator(newEmail)) {
            setNotEmail(true);
            return;
        }
        if (!phoneValidator(newPhone)) {
            setNotPhone(true);
            return;
        }
        updateLoading(true);

        updateUserInfo(newEmail, newPostCode, newPhone);
        const refNumber = Math.floor(Math.random() * 10000000); //random number for reference
        const postData = {
            "vehicle_number": vehicleNumber,
            "vehicle_name": vehicleName,
            "created_year": createdYear,
            "price": price,
            "bodyStyle": bodyStyle,
            "fuelType": fuelType,
            "color": color,
            "mileage": mileage,
            "previous_owners": previousOwners,
            "service_history": serviceHistory,
            "personal_register": personalRegister,
            "import_status": importStatus,
            "v_key": vkey,
            "non_runner": nonRunner,
            "insurance": insurance,
            "private_hire": privateHire,
            "driving_tuition": drivingTuition,
            "police": police,
            "seats": seats,
            "damaged": damaged,

            "zone": zone,
            "component": component,
            "fault": fault,
            "name": newName,
            "email": newEmail,
            "postcode": newPostCode,
            "phone": newPhone,
            "appointment_place": appointmentPlace,
            "appointment_date": appointmentDate,
            "appointment_time": appointmentTime,
            "refNumber": refNumber,
        };

        axios.post(`${backendUrl}/api/setVehicleStatusData`, postData)
            .then(response => {
                updateLoading(false);
                navigate('/contact/1');
                // toast.success(response.data.message)
            })
            .catch(error => {
                updateLoading(false);
                console.error('Error:', error);
            }
        );
        // Here, put sending welcome email feature : Reference number, Registration number, Basic Vehicle details 
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="BookPage py-5">
                    <Container>
                        <Row>
                            <Col sm={12} lg={6} className="mb-2">
                                <Carousel className="mb-3">
                                    {

                                        imageDetailsList.map((value, index) => (
                                            <Carousel.Item key={index}>
                                                <Image src={value.ImageUrl} width="100%" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        ))
                                    }
                                </Carousel>
                            </Col>
                            <Col sm={12} lg={6} className="mb-2">
                                <div className='text-start mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                                        <Form.Control
                                            required
                                            placeholder="Joe"
                                            aria-describedby="basic-addon1"
                                            ref={inputRef}
                                            onChange={(e) => setNewName(e.target.value)}
                                            value={newName}
                                        />
                                    </InputGroup>
                                </div>
                                <div className='text-start mb-3'>
                                    <Form.Label>Address</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Image src={MapIcon} width="25" /></InputGroup.Text>
                                        <Form.Control
                                            required
                                            placeholder="e.g. London"
                                            aria-describedby="basic-addon1"
                                            ref={inputRef}
                                            onChange={(e) => setNewPostCode(e.target.value)}
                                            value={newPostCode}
                                        />
                                    </InputGroup>
                                </div>
                                <div className='text-start mb-3'>
                                    <Form.Label>Email address</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Image src={MailLineIcon} width="25" /></InputGroup.Text>
                                        <Form.Control
                                            required
                                            placeholder="e.g. hello@email.com"
                                            aria-describedby="basic-addon1"
                                            type="email"
                                            ref={inputRef}
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            value={newEmail}
                                        />
                                    </InputGroup>
                                    <Form.Label style={{display: `${notEmail?"block":"none"}`, color: "red"}}>Please check this has been entered correctly.</Form.Label>
                                </div>

                                <div className='text-start mb-3'>
                                    <Form.Label>Phone number</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Image src={PhoneLinIcon} width="25" /></InputGroup.Text>
                                        <Form.Control
                                            required
                                            placeholder="e.g. +447513438167"
                                            aria-describedby="basic-addon1"
                                            ref={inputRef}
                                            onChange={(e) => setNewPhone(e.target.value)}
                                            value={newPhone}
                                        />
                                    </InputGroup>
                                    <Form.Label style={{display: `${notPhone?"block":"none"}`, color: "red"}}>Please check this has been entered correctly.</Form.Label>
                                </div>
                                {/* <div className='text-start mb-3'>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            type="switch"
                                            label="I agree to receive info about selling my vehicle and its value, and other marketing communications"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                </div> */}
                                <div className='text-center mt-5'>
                                    <Button className='bg-yellow border border-0 submit-button w-50' onClick={submitButton}>Confirm Booking</Button>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </>

    )
}