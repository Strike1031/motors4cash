import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";
import { EditIcon } from "../assets";
import { Link, Navigate, Navigator, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { VehicleContext, backendUrl } from "../context/context";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const AdminLoginCard = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {updateLoading, updateAdminInfo } = useContext(VehicleContext);
    const navigate = useNavigate();


    const login = () => {
        updateLoading(true);
        const queryParams = {
            name: name,
            password: password
        }
        axios.post(`${backendUrl}/api/admin`, queryParams)
            .then(response => {
                // Handle the successful response here
                if (response.data.status == true) {
                    updateLoading(false);
                    toast.success(response.data.message);
                    updateAdminInfo(name, password);
                    navigate(`/admin/table`);
                }
                //
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                toast.error("Name or Password is incorrect");
                updateLoading(false);
                console.error('Error:', error);
            });
    }
    return (
        <Card className="FormCard bg-yellow border-0 py-5 px-3 my-5">
            <Card.Body className="text-center">
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                    <Form.Label>Admin Name</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                        <Form.Control
                            placeholder=""
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                        <Form.Control
                            placeholder=""
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Button className="ValueCar-submit w-75" onClick={login}>
                    {/* <Link to="/detail/1" className="nav-link" onClick={getData}> */}
                    Login
                    {/* </Link> */}
                </Button>
            </Card.Body>
        </Card>
    )
}

export const FormCard = () => {

    const [reg, setReg] = useState("");
    const [mileage, setMileage] = useState("");
    const {ImageDetailsList, updateVehicle, updateAssumptionValues, updateVehicleDamage, updateLoading } = useContext(VehicleContext);
    let navigate = useNavigate();


    const getData = () => {
        updateLoading(true);
        const queryParams = {
            reg: reg,
            mileage: mileage
        }
        axios.get(`${backendUrl}/api/getVehicleData`, { params: queryParams })
            .then(response => {
                // Handle the successful response here
                // updateVehicle(data.mileage)
               
                updateVehicle(
                    response.data.data.carDetails.reg,
                    response.data.data.carDetails.makeModel,
                    response.data.data.carDetails.yearOfManufacture,
                    response.data.data.carDetails.colour,
                    response.data.data.carDetails.mileage,
                    response.data.data.carDetails.price,
                    response.data.data.carDetails.bodyStyle,
                    response.data.data.carDetails.fuelType,
                    response.data.data.carDetails.VehicleImages.ImageDetailsList
                );
                if (response.data.data.customDetails != null) {
                    updateAssumptionValues(
                        response.data.data.carDetails.mileage,
                        response.data.data.customDetails.previous_owners,
                        response.data.data.customDetails.service_history,
                        response.data.data.customDetails.personal_register,
                        response.data.data.customDetails.import_status,
                        response.data.data.customDetails.v_key,
                        response.data.data.customDetails.non_runner,
                        response.data.data.customDetails.mot_month,
                        response.data.data.customDetails.insurance,
                        response.data.data.customDetails.private_hire,
                        response.data.data.customDetails.driving_tuition,
                        response.data.data.customDetails.police,
                        response.data.data.customDetails.seats
                    );
                    updateVehicleDamage(
                        response.data.data.customDetails.zone,
                        response.data.data.customDetails.component,
                        response.data.data.customDetails.fault
                    );

                }
                updateLoading(false)
                navigate('detail/1');
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                updateLoading(false)
                console.error('Error:', error);
            });
    }
    return (
        <Card className="FormCard bg-yellow border-0 py-5 px-3 my-5">
            <Card.Body className="text-center">
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                    <Form.Label>REGISTRATION</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text i  d="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                        <Form.Control
                            placeholder=""
                            aria-label="reg"
                            aria-describedby="basic-addon1"
                            value={reg}
                            onChange={(e) => setReg(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                    <Form.Label>MILEAGE</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                        <Form.Control
                            placeholder=""
                            aria-label="mileage"
                            aria-describedby="basic-addon1"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Button className="ValueCar-submit w-75" onClick={getData}>
                    {/* <Link to="/detail/1" className="nav-link" onClick={getData}> */}
                    VALUE YOUR CAR
                    {/* </Link> */}
                </Button>
            </Card.Body>
        </Card>
    )
}


export const WorkflowItemCard = ({ image, title, subtitle }) => {
    return (
        <Card className="WorkflowItemCard border-0">
            <Card.Body>
                <Image src={image} width="155" className="mb-3" />
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}