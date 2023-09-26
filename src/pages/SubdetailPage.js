import { Tabs, Tab, Container, Row, Col, Form, InputGroup, Image, Button, Card } from "react-bootstrap";
import { MileageIcon } from "../assets";
import { useContext, useState } from "react";
import { VehicleContext } from "../context/context";
import { NavLink } from "react-router-dom";

export default function SubDetailPage() {
   
    const AssumptionContent = () => {
        const {
            mileage,
            previousOwners,
            serviceHistory,
            personalRegister,
            importStatus,
            vkey,
            nonRunner,
            motMonth,
            insurance,
            privateHire,
            drivingTuition,
            police,
            seats,
            updateAssumptionValues,
        } = useContext(VehicleContext);

        const [newMileage, setNewMileage] = useState(mileage);
        const [newPreviousOwners, setNewPreviousOwners] = useState(previousOwners);
        const [newServiceHistory, setNewServiceHistory] = useState(serviceHistory);
        const [newPersonalRegister, setNewpersonalRegister] = useState(personalRegister);
        const [newImportStatus, setNewImportStatus] = useState(importStatus);
        const [newVkey, setNewVkey] = useState(vkey);
        const [newNonRunner, setNewNonRunner] = useState(nonRunner);
        const [newMotMonth, setNewMotMonth] = useState(motMonth);
        const [newInsurance, setNewInsurance] = useState(insurance);
        const [newPrivateHire, setNewPrivateHire] = useState(privateHire);
        const [newDrivingTuition, setNewDrivingTuition] = useState(drivingTuition);
        const [newPolice, setNewPolice] = useState(police);
        const [newSeats, setNewSeats] = useState(seats);



        const updateAssumption = () => {
            updateAssumptionValues(newMileage, newPreviousOwners, newServiceHistory, newPersonalRegister, newImportStatus, newVkey, newNonRunner, newMotMonth, newInsurance, newPrivateHire, newDrivingTuition, newPolice, newSeats);
        }


        return (
            <div className="AssumptionContent">
                <Row className="mb-3 mileage-info">
                    <Col>
                        <Form.Label>Mileage</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <Image src={MileageIcon} width="50" className="mx-3" />
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" value={newMileage} onChange={(e) => setNewMileage(e.target.value)} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 owner-info">
                    <Col>
                        <Form.Label htmlFor="basic-url">Previous owners</Form.Label>
                        <Row>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(0)} active={newPreviousOwners == 0 ? true : false}>0</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(1)} active={newPreviousOwners == 1 ? true : false}>1</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(2)} active={newPreviousOwners == 2 ? true : false}>2</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(3)} active={newPreviousOwners == 3 ? true : false}>3</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(4)} active={newPreviousOwners == 4 ? true : false}>4</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(5)} active={newPreviousOwners >= 5 ? true : false}>5+</Button></Col>
                            <Col><Button className="border border-0" onClick={() => setNewPreviousOwners(-1)} active={newPreviousOwners < 0 ? true : false}>?</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 service-history-info">
                    <Col>
                        <Form.Label htmlFor="basic-url">Service History</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewServiceHistory(0)} active={newServiceHistory == 0 ? true : false}>Full</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewServiceHistory(1)} active={newServiceHistory == 1 ? true : false}>Some</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewServiceHistory(2)} active={newServiceHistory == 2 ? true : false}>None</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewServiceHistory(3)} active={newServiceHistory == 3 ? true : false}>First Not Due</Button></Col>
                        </Row>
                        <Card className="border border-black service-history-info-description">
                            <Card.Body className="px-5">
                                <ul>
                                    <li className="mb-2"><strong>Full service history -</strong>You have your vehicles service history log and it is fully stamped and up to date.</li>
                                    <li className="mb-2"><strong>Some service history - </strong>You have your vehicles service history log and it has some completed entries but is missing some history or is not up to date.</li>
                                    <li className="mb-2"><strong>First service not yet due -</strong>Your vehicle has not reached the manufacturers specified age or mileage for the first service interval.</li>
                                    <li ><strong>No service history -</strong>There is no documented service history for your vehicle.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Do you intend to sell your vehicle with a personalised registration?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewpersonalRegister(true)} active={newPersonalRegister == true ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewpersonalRegister(false)} active={newPersonalRegister == false ? true : false}>No</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Is your car an import?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewImportStatus(0)} active={newImportStatus == 0 ? true : false}>No</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewImportStatus(1)} active={newImportStatus == 1 ? true : false}>Yes (European)</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewImportStatus(2)} active={newImportStatus == 2 ? true : false}>Yes (Non-European)</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">How many sets of keys do you have for this vehicle?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewVkey(false)} active={newVkey == false ? true : false}>1</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewVkey(true)} active={newVkey == true ? true : false}>2 or more</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Is the vehicle a non-runner?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewNonRunner(true)} active={newNonRunner == true ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewNonRunner(false)} active={newNonRunner == false ? true : false}>No</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group-select">
                    <Col>
                        <Form.Label>How many months until the vehicle is due its MOT?</Form.Label>
                        <InputGroup>
                            <Form.Select className="border border-black" aria-label="Default select example" value={newMotMonth} onChange={(e) => setNewMotMonth(e.target.value)}>
                                <option value="0">Open this select menu</option>
                                <option value="1">Less 1 months</option>
                                <option value="2">1 months</option>
                                <option value="3">3 + months</option>
                                <option value="4">6 + months</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group-select">
                    <Col>
                        <Form.Label>Has your vehicle ever been subject to an insurance write off or been accident damaged?</Form.Label>
                        <InputGroup>
                            <Form.Select className="border border-black" aria-label="Default select example" value={newInsurance} onChange={(e) => setNewInsurance(e.target.value)}>
                                <option value="0">Open this select menu</option>
                                <option value="1">Never written off</option>
                                <option value="2">Never written on</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle ever been used for private hire?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewPrivateHire(false)} active={newPrivateHire == false ? true : false}>1</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewPrivateHire(true)} active={newPrivateHire == true ? true : false}>2 or more</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle ever been used for driving tuition?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewDrivingTuition(true)} active={newDrivingTuition == true ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewDrivingTuition(false)} active={newDrivingTuition == false ? true : false}>No</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle ever been used as a police/emergency vehicle?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewPolice(true)} active={newPolice == true ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewPolice(false)} active={newPolice == false ? true : false}>No</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle been modified with motability ramps, a winch or now has missing seats?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewSeats(true)} active={newSeats == true ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewSeats(false)} active={newSeats == false ? true : false}>No</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button className="w-50 border border-0 bg-yellow update-button" onClick={updateAssumption}>UPDATE VALUATION</Button>
                </div>
            </div>
        )
    }

    const VehicleDamageContent = () => {
        const {
            zone,
            component,
            fault,
            updateVehicleDamage
        } = useContext(VehicleContext);

        const [newZone, setNewZone] = useState(zone);
        const [newComponent, setNewComponent] = useState(component);
        const [newFault, setNewFault] = useState(fault);

        const updateDamage = () => {
            updateVehicleDamage(newZone, newComponent, newFault)
        }
        return (
            <div className="VehicleDamageContent">
                <Row className="mb-3 set-info-group-select">
                    <Col>
                        <Form.Label>Select zone</Form.Label>
                        <InputGroup>
                            <Form.Select className="border border-black" aria-label="Default select example" value={newZone} onChange={(e) => setNewZone(e.target.value)}>
                                <option value="0">Select zone...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group-select">
                    <Col>
                        <Form.Label>Select component</Form.Label>
                        <InputGroup>
                            <Form.Select className="border border-black" aria-label="Default select example" value={newComponent} onChange={(e) => setNewComponent(e.target.value)}>
                                <option value="0">Select componen...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 set-info-group-select">
                    <Col>
                        <Form.Label>Select fault</Form.Label>
                        <InputGroup>
                            <Form.Select className="border border-black" aria-label="Default select example" value={newFault} onChange={(e) => setNewFault(e.target.value)}>
                                <option value="0">Select fault...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <div className="text-center">
                    {/* <Button className="w-100 border border-0 add-damage-button mb-3">ADD DAMAGE</Button> */}
                    <Button className="w-100 border border-0 bg-yellow update-button mb-3" onClick={updateDamage}>UPDATE VALUATION</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="SubDetailPage py-5">
            <div className='Section-title text-center'>Update assumptions & add damage</div>
            <div className='Section-desc text-center'>Here you can let us know about any vehicle damage and update your assumptions</div>
            <Container>
                <Tabs
                    defaultActiveKey="assumptions"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="assumptions" title="Assumptions">
                        <AssumptionContent />
                    </Tab>
                    <Tab eventKey="vehicle_damage" title="Vehicle damage">
                        <VehicleDamageContent />
                    </Tab>
                </Tabs>
                <div>
                    <NavLink to="/detail/1" className="fw-bold nav-link">Back</NavLink>
                </div>
            </Container>
        </div>
    )
}
