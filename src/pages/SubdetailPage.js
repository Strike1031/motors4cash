import { Tabs, Tab, Container, Row, Col, Form, InputGroup, Image, Button, Card } from "react-bootstrap";
import { MileageIcon } from "../assets";
import { useContext, useEffect, useState, useRef } from "react";
import { VehicleContext } from "../context/context";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from "bs-stepper";
import Modal from 'react-bootstrap/Modal';

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
            insurance,
            privateHire,
            drivingTuition,
            police,
            seats,
            damaged,
            updateAssumptionValues,
        } = useContext(VehicleContext);

        const [newMileage, setNewMileage] = useState(mileage);
        const [newPreviousOwners, setNewPreviousOwners] = useState(previousOwners);
        const [newServiceHistory, setNewServiceHistory] = useState(serviceHistory);
        const [newPersonalRegister, setNewpersonalRegister] = useState(personalRegister);
        const [newImportStatus, setNewImportStatus] = useState(importStatus);
        const [newVkey, setNewVkey] = useState(vkey);
        const [newNonRunner, setNewNonRunner] = useState(nonRunner);
        const [newInsurance, setNewInsurance] = useState(insurance);
        const [newPrivateHire, setNewPrivateHire] = useState(privateHire);
        const [newDrivingTuition, setNewDrivingTuition] = useState(drivingTuition);
        const [newPolice, setNewPolice] = useState(police);
        const [newSeats, setNewSeats] = useState(seats);
        const [newDamaged, setNewDamaged] = useState(damaged);

        const navigate = useNavigate();

        const updateAssumption = () => {
            updateAssumptionValues(newMileage, newPreviousOwners, newServiceHistory, newPersonalRegister, newImportStatus, newVkey, newNonRunner, newInsurance, newPrivateHire, newDrivingTuition, newPolice, newSeats, newDamaged);
            // toast.success("Success");
            navigate("/book/1");
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
                            <Form.Control required id="basic-url" aria-describedby="basic-addon3" value={newMileage} onChange={(e) => setNewMileage(e.target.value)} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3 owner-info">
                    <Col>
                        <Form.Label htmlFor="basic-url">Previous owners</Form.Label>
                        <Row className="d-flex flex-wrap">
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(0)} active={newPreviousOwners == 0 ? true : false}>0</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(1)} active={newPreviousOwners == 1 ? true : false}>1</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(2)} active={newPreviousOwners == 2 ? true : false}>2</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(3)} active={newPreviousOwners == 3 ? true : false}>3</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(4)} active={newPreviousOwners == 4 ? true : false}>4</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(5)} active={newPreviousOwners >= 5 ? true : false}>5+</Button></Col>
                            <Col className="my-1 "><Button className="border border-0" onClick={() => setNewPreviousOwners(-1)} active={newPreviousOwners < 0 ? true : false}>?</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-3 service-history-info">
                    <Col>
                        <Form.Label htmlFor="basic-url">Service History</Form.Label>
                        <Row className="mb-3">
                            <Col sm={6} md={3} className="my-1 "><Button className="border border-black" onClick={() => setNewServiceHistory(0)} active={newServiceHistory == 0 ? true : false}>Full</Button></Col>
                            <Col sm={6} md={3} className="my-1 "><Button className="border border-black" onClick={() => setNewServiceHistory(1)} active={newServiceHistory == 1 ? true : false}>Some</Button></Col>
                            <Col sm={6} md={3} className="my-1 "><Button className="border border-black" onClick={() => setNewServiceHistory(2)} active={newServiceHistory == 2 ? true : false}>None</Button></Col>
                            <Col sm={6} md={3} className="my-1 "><Button className="border border-black" onClick={() => setNewServiceHistory(3)} active={newServiceHistory == 3 ? true : false}>First Not Due</Button></Col>
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
                            <Col md={4} sm={12} className="my-2"><Button className="border border-black" onClick={() => setNewImportStatus(0)} active={newImportStatus == 0 ? true : false}>No</Button></Col>
                            <Col md={4} sm={12} className="my-2"><Button className="border border-black" onClick={() => setNewImportStatus(1)} active={newImportStatus == 1 ? true : false}>Yes (European)</Button></Col>
                            <Col md={4} sm={12} className="my-2"><Button className="border border-black" onClick={() => setNewImportStatus(2)} active={newImportStatus == 2 ? true : false}>Yes (Non-European)</Button></Col>
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
                        <Form.Label>Has your vehicle ever been subject to an insurance write off or been accident damaged?</Form.Label>
                        <InputGroup>
                            <Form.Select required className="border border-black" aria-label="Default select example" value={newInsurance} onChange={(e) => setNewInsurance(e.target.value)}>
                                <option value="0">Yes</option>
                                <option value="1">No</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle ever been used for private hire?</Form.Label>
                        <Row className="mb-3">
                            <Col><Button className="border border-black" onClick={() => setNewPrivateHire(false)} active={newPrivateHire == false ? true : false}>Yes</Button></Col>
                            <Col><Button className="border border-black" onClick={() => setNewPrivateHire(true)} active={newPrivateHire == true ? true : false}>No</Button></Col>
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
                <Row className="mb-3 set-info-group">
                    <Col>
                        <Form.Label htmlFor="basic-url">Has your vehicle ever been subject to an insurance write off or been accident damaged?</Form.Label>
                        <InputGroup>
                            <Form.Select required className="border border-black" aria-label="Default select example" value={newDamaged} onChange={(e) => setNewDamaged(e.target.value)}>
                                <option value="0">Never written off</option>
                                <option value="1">A - Damage deemed unrepairable, no salvageable parts</option>
                                <option value="2">B - Damage deemed unrepairable, salvageable parts</option>
                                <option value="3">C - Damage deemed repairable, cost greater than vehicle value</option>
                                <option value="4">D - Damage deemed repairable, cost less than vehicle value</option>
                                <option value="5">VCAR - Cat C/D repaired, DOT inspected</option>
                                <option value="6">S - Structurally damaged, repairable</option>
                                <option value="7">N - Non-structurally damaged, repairable</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col sm={12} md={6} className="mx-auto">
                        <Button className="w-100 border border-0 bg-yellow update-button" onClick={updateAssumption}>GET VALUATION</Button>
                    </Col>
                </Row>
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

        const [showDialog, setShowDialog] = useState(false);  //temp for show Dialog
        const handleClose = () => { setShowDialog(false); }   //temp for close Dialog
        //mine:
        const [newBodyWork, setNewBodyWork] = useState(0);
        const [newPanelDamageCount, setNewPanelDamageCount] = useState(1);
        //
        const [newWindScreen, setNewWindScreen] = useState(0);
        const [newCrackedDriverSide, setNewCrackedDriverSide] = useState(false);
        const [newCrackedPassengerSide, setNewCrackedPassengerSide] = useState(false);
        const [newCrackedRearWindow, setNewCrackedRearWindow] = useState(false);
        const [newLarge5pCoin, setNewLarge5pCoin] = useState(true);
        //
        const [newDashWarningLight, setNewDashWarningLight] = useState(0);
        const [newDashMaxMiles, setNewDashMaxMiles] = useState(70000);
        const [newDashMaxMiles_Temp, setNewDashMaxMiles_Temp] = useState(70000); //temp for saving newDashMaxMiles

        const [newServiceDue, setNewServiceDue] = useState(false);
        const [newOilWarning, setNewOilWarning] = useState(false);
        const [newEngineManagement, setNewEngineManagement] = useState(false);
        const [newAirbagWarning, setNewAirbagWarning] = useState(false);
        const [newABS, setNewABS] = useState(false);

        //
        const [newWheels, setNewWheels] = useState(0);
        const [newAlloyScuffed, setNewAlloyScuffed] = useState(0);
        const [newTyreTradeLimit, setNewTyreTradeLimit] = useState(0);

        //
        const [newMirrors, setNewMirrors] = useState(0);
        const [newMirrorFaulty, setNewMirrorFaulty] = useState(false);
        const [newMirrorGlass, setNewMirrorGlass] = useState(0);
        const [newMirrorCover, setNewMirrorCover] = useState(0);

        //
        const [newInterior, setNewInterior] = useState(0);
        const [newHasStains, setNewHasStains] = useState(false);
        const [newHasTears, setNewHasTears] = useState(false);
        const [newHasBurns, setNewHasBurns] = useState(false);
        // Wrap up
        const [newWrapPrivatePlate, setNewWrapPrivatePlate] = useState(false);
        const [newWrapTwoKeys, setNewWrapTwoKeys] = useState(false);
        const [newWrapOverMOT, setNewWrapOverMOT] = useState(false);
        const [newWrapLogbook, setNewWrapLogbook] = useState(false);
        const [newWrapSC, setNewWrapSC] = useState(false);
        const [newWrapMissingPart, setNewWrapMissingPart] = useState(false);
        const [newWrapFaultyElectrics, setNewWrapFaultyElectrics] = useState(false);
        const [newWrapMechanicalIssues, setNewWrapMechanicalIssues] = useState(false);
        const [newWrapNoModification, setNewWrapNoModification] = useState(false);
        const [newWrapNoMileageAlteration, setNewWrapNoMileageAlteration] = useState(false);
        const [newWrapIsNotImported, setNewWrapIsNotImported] = useState(false);
        const [newWrapRightHandDrive, setNewWrapRightHandDrive] = useState(false);
        const [newWrapExDriveSchool, setNewWrapExDriveSchool] = useState(false);
        const [newWrapTaxi, setNewWrapTaxi] = useState(false);
        /**
         * 
         */
        const navigate = useNavigate();
        const stepperRef = useRef(null);
        useEffect(() => {
            stepperRef.current = new Stepper(document.querySelector('#stepper1'), {
                linear: false,
                animation: true,
            });
        }, []);
        //
        const showPanelDamage = (count) => {
            console.log("showPanelDamage");
            setNewPanelDamageCount(count);
        }
        //

        const updateDamage = () => {
            console.log('updateDamage');
            updateVehicleDamage(newBodyWork, newPanelDamageCount, newWindScreen, newCrackedDriverSide, newCrackedPassengerSide, newCrackedRearWindow, newLarge5pCoin, newDashWarningLight, newDashMaxMiles, newServiceDue, newOilWarning, newEngineManagement, newAirbagWarning, newABS, newWheels, newAlloyScuffed, newTyreTradeLimit, newMirrors, newMirrorFaulty, newMirrorGlass, newMirrorCover, newInterior, newHasStains, newHasTears, newHasBurns, 
                newWrapPrivatePlate,
                newWrapTwoKeys,
                newWrapOverMOT,
                newWrapLogbook,
                newWrapSC,
                newWrapMissingPart,
                newWrapFaultyElectrics,
                newWrapMechanicalIssues,
                newWrapNoModification,
                newWrapNoMileageAlteration,
                newWrapIsNotImported,
                newWrapRightHandDrive,
                newWrapExDriveSchool,
                newWrapTaxi);
            // toast.success("Success");
            navigate("/book/1");
        }

        return (
            <div>
                <div id="stepper1" className="bs-stepper">
                    <div className="bs-stepper-header">
                        <div className="step" data-target="#test-l-1">
                            <button className="step-trigger" type="button">
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>1</span>
                                <span className="bs-stepper-label">Paint&Bodywork</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-2">
                            <button className="step-trigger" type="button">
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>2</span>
                                <span className="bs-stepper-label">Windscreens</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-3">
                            <button className="step-trigger" type="button">
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>3</span>
                                <span className="bs-stepper-label">Dash</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-4">
                            <button className="step-trigger" type="button">
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>4</span>
                                <span className="bs-stepper-label">Wheels&Types</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-5">
                            <button className="step-trigger" type="button">
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>5</span>
                                <span className="bs-stepper-label">Mirrors</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-6">
                            <button className="step-trigger" type="button" >
                                <span className="bs-stepper-circle" style={{ backgroundColor: "#d9d9d9", color: 'black' }}>6</span>
                                <span className="bs-stepper-label">Interior</span>
                            </button>
                        </div>
                    </div>
                    <div className="bs-stepper-content">
                        <Container>
                            <Row>
                                <Col lg={3}></Col>
                                <Col lg={6}>
                                    <div id="test-l-1" className="content">
                                        <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Is there any damage to the paint or bodywork?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Damage includes rust, dents, holes, chips and scratches of any size.</Form.Label>
                                                    <br />
                                                    <Form.Label>Make sure to check all bodywork panels, including:</Form.Label>
                                                    <br />
                                                    <Row>
                                                        <Col>
                                                            <ul>
                                                                <li>Bumpers</li>
                                                                <li>Doors</li>
                                                                <li>Door pillars</li>
                                                            </ul>
                                                        </Col>
                                                        <Col>
                                                            <ul>
                                                                <li>Roof</li>
                                                                <li>Bonnet</li>
                                                                <li>Sills</li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewBodyWork(1)} active={newBodyWork == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewBodyWork(0)} active={newBodyWork == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>How many panels are damaged?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Panels include; doors, door pillars(between doors), roof, bannet, bumpers etc.</Form.Label>
                                                    <br />
                                                    <InputGroup className="mb-3">
                                                        <Button variant="outline-secondary" id="panel_sub" onClick={() => showPanelDamage(newPanelDamageCount - 1 < 1 ? 1 : newPanelDamageCount - 1)}>
                                                            -
                                                        </Button>
                                                        <Form.Control
                                                            aria-label="Example text with button addon"
                                                            aria-describedby="basic-addon1"
                                                            type="number"
                                                            style={{ textAlign: "center" }}
                                                            value={newPanelDamageCount}
                                                            onChange={(evt) => { showPanelDamage(evt.target.value < 1 ? 1 : evt.target.value) }}
                                                        />
                                                        <Button variant="outline-secondary" id="panel_add" onClick={() => showPanelDamage(newPanelDamageCount + 1)}>
                                                            +
                                                        </Button>
                                                    </InputGroup>
                                                    <Form.Label>Type of damage</Form.Label>
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div id="test-l-2" className="content">
                                        <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Is there any windscreen or rear window damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>This includes anything from a small stone chip to a large crack.</Form.Label>
                                                    <div style={{ marginBottom: "100px" }} />
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewWindScreen(1)} active={newWindScreen == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewWindScreen(0)} active={newWindScreen == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>What's the damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Please select from the following:</Form.Label>
                                                    <br />
                                                    <Form.Check type="checkbox" label="Chipped or cracked driver side" checked={newCrackedDriverSide} onChange={e => setNewCrackedDriverSide(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Chipped or cracked passenger side" checked={newCrackedPassengerSide} onChange={e => setNewCrackedPassengerSide(e.target.checked)} />
                                                    {newCrackedPassengerSide ? <div>
                                                        <br />
                                                        <p className="mx-4">Is it larger than a 5p coin? (1.5cm)</p>
                                                        <Form className="mx-4">
                                                            <Form.Check name="newLargeCoin" type="radio" label="Yes" value={newLarge5pCoin} checked={newLarge5pCoin == true} onChange={e => setNewLarge5pCoin(true)} />
                                                            <Form.Check name="newLargeCoin" type="radio" label="No" value={newLarge5pCoin} checked={newLarge5pCoin == true} onChange={e => setNewLarge5pCoin(false)} />
                                                        </Form>
                                                        <br />
                                                    </div> : <></>}
                                                    <Form.Check type="checkbox" label="Cracked or chipped rear window" checked={newCrackedRearWindow} onChange={e => setNewCrackedRearWindow(e.target.checked)} />
                                                    <div style={{ marginBottom: "100px" }}></div>
                                                </Col>
                                            </Row>

                                        </div> */}
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div id="test-l-3" className="content">
                                        <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Jump into the drivers seat</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Almost there!</Form.Label>
                                                    <br />
                                                    <Form.Label>The last few questions should be answered from inside your car.</Form.Label>
                                                    <br />
                                                    <Form.Label>You will need the engine turned on to answer some of these questions, so make sure you are parked up and in a safe location.</Form.Label>
                                                    <br />
                                                    <div style={{ marginBottom: "50px" }} />
                                                    <Row>
                                                        <Col md={10} className="mx-auto" style={{ textAlign: "center" }}>
                                                            <Button className='btn btn-secondary w-50' onClick={() => { }}>Jump into the drivers seat</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <div className="text-start">
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Are any of the following warning lights on?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Check your dashboard(while the engine is running) for the following warnings:</Form.Label>
                                                    <br />
                                                    <ul>
                                                        <li>Service due</li>
                                                        <li>Oil warning</li>
                                                        <li>Engine management</li>
                                                        <li>Airbag warning</li>
                                                        <li>ABS</li>
                                                    </ul>
                                                    <Modal show={showDialog} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Set Mileage</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Container>
                                                                <Form.Control
                                                                    aria-label="Example text with button addon"
                                                                    aria-describedby="basic-addon1"
                                                                    type="number"
                                                                    value={newDashMaxMiles_Temp}
                                                                    onChange={(evt) => { setNewDashMaxMiles_Temp(evt.target.value) }}
                                                                />
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="primary" onClick={() => { setNewDashMaxMiles(newDashMaxMiles_Temp); setShowDialog(false); }}>
                                                                OK
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                    <Card className="border border-5 rounded-0 border-success border-end-0 border-top-0 border-bottom-0 text-start">
                                                        <Card.Body>
                                                            Tip: Make sure your mileage is exact so that we can give you a guaranteed price.<br /><br />
                                                            <Row>
                                                                <Col className="text-start">
                                                                    {newDashMaxMiles} miles
                                                                </Col>
                                                                <Col className="text-end">
                                                                    <Button type="button" className="bg-transparent border border-0 text-primary" onClick={() => setShowDialog(true)}>Adjust mileage</Button>
                                                                </Col>
                                                            </Row>

                                                        </Card.Body>
                                                    </Card>
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewDashWarningLight(1)} active={newDashWarningLight == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewDashWarningLight(0)} active={newDashWarningLight == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        {/* <div className="text-start">
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Which lights are still on?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Please select from the following:</Form.Label>
                                                    <div style={{ marginBottom: "50px" }}></div>
                                                    <Form.Check type="checkbox" label="Service due" checked={newServiceDue} onChange={e => setNewServiceDue(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Oil warning" checked={newOilWarning} onChange={e => setNewOilWarning(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Engine management" checked={newEngineManagement} onChange={e => setNewEngineManagement(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Airbag warning" checked={newAirbagWarning} onChange={e => setNewAirbagWarning(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="ABS" checked={newABS} onChange={e => setNewABS(e.target.checked)} />
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <br />
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div id="test-l-4" className="content">
                                        <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Any damage to your alloy wheels, wheel trims or tyres?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Let us know if the alloys or wheel trims are scuffed or the tyres are worn/punctured.</Form.Label>
                                                    <div style={{ marginBottom: "100px" }} />
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewWheels(1)} active={newWheels == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewWheels(0)} active={newWheels == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>

                                        </div>
                                        {/* <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>What's the damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label><h4>Scuffed alloys</h4></Form.Label>
                                                    <br />
                                                    <Form.Label>How many alloys are scuffed?</Form.Label>
                                                    <br />
                                                    <InputGroup className="mb-3">
                                                        <Button variant="outline-secondary" id="panel_sub" onClick={() => setNewAlloyScuffed(newAlloyScuffed - 1 < 0 ? 0 : newAlloyScuffed - 1)}>
                                                            -
                                                        </Button>
                                                        <Form.Control
                                                            aria-label="Example text with button addon"
                                                            aria-describedby="basic-addon1"
                                                            type="number"
                                                            style={{ textAlign: "center" }}
                                                            value={newAlloyScuffed}
                                                            onChange={(evt) => { setNewAlloyScuffed(evt.target.value < 0 ? 0 : evt.target.value) }}
                                                        />
                                                        <Button variant="outline-secondary" id="panel_add" onClick={() => setNewAlloyScuffed(newAlloyScuffed + 1)}>
                                                            +
                                                        </Button>
                                                    </InputGroup>
                                                    <Form.Label><h4>Worn tyres</h4></Form.Label>
                                                    <br />
                                                    <Form.Label>How many tyres are below the 1.6mm tyre tread limit and need replacing?</Form.Label>
                                                    <InputGroup className="mb-3">
                                                        <Button variant="outline-secondary" id="panel_sub" onClick={() => setNewTyreTradeLimit(newTyreTradeLimit - 1 < 0 ? 0 : newTyreTradeLimit - 1)}>
                                                            -
                                                        </Button>
                                                        <Form.Control
                                                            aria-label="Example text with button addon"
                                                            aria-describedby="basic-addon1"
                                                            type="number"
                                                            style={{ textAlign: "center" }}
                                                            value={newTyreTradeLimit}
                                                            onChange={(evt) => { setNewTyreTradeLimit(evt.target.value < 1 ? 1 : evt.target.value) }}
                                                        />
                                                        <Button variant="outline-secondary" id="panel_add" onClick={() => setNewTyreTradeLimit(newTyreTradeLimit + 1)}>
                                                            +
                                                        </Button>
                                                    </InputGroup>
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div id="test-l-5" className="content">
                                        <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>Are there any problems with the mirrors?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>This includes electrical faults or if the glass or cover is scratched and/or missing.</Form.Label>
                                                    <div style={{ marginBottom: "100px" }} />
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewMirrors(1)} active={newMirrors == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewMirrors(0)} active={newMirrors == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>

                                        </div>
                                        {/* <div>
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>What's the damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Please select from the following:</Form.Label>
                                                    <br />
                                                    <Form.Label>Mirror electronics</Form.Label>
                                                    <div className="mx-2">
                                                        <Form.Check type="checkbox" label="Faulty" checked={newMirrorFaulty} onChange={e => setNewMirrorFaulty(e.target.checked)} />
                                                    </div>
                                                    <Form.Label>Mirror glass</Form.Label>
                                                    <div className="mx-2">
                                                        <Form.Check type="radio" label="One scratched or missing" name="mirrorGlass" value={newMirrorGlass} checked={newMirrorGlass == 1} onChange={e => setNewMirrorGlass(1)}></Form.Check>
                                                        <Form.Check type="radio" label="Both scratched or missing" name="mirrorGlass" value={newMirrorGlass} checked={newMirrorGlass == 2} onChange={e => setNewMirrorGlass(2)}></Form.Check>
                                                    </div>
                                                    <Form.Label>Mirror cover</Form.Label>
                                                    <div className="mx-2">
                                                        <Form.Check type="radio" label="One scratched or missing" name="mirrorCover" value={newMirrorCover} checked={newMirrorCover == 1} onChange={e => setNewMirrorCover(1)}></Form.Check>
                                                        <Form.Check type="radio" label="Both scratched or missing" name="mirrorCover" value={newMirrorCover} checked={newMirrorCover == 2} onChange={e => setNewMirrorCover(2)}></Form.Check>
                                                    </div>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div id="test-l-6" className="content text-center">
                                        <div>
                                            <Row>
                                                <Col md={6} className="mx-auto">
                                                    <Form.Label><h2>Any seat, carpet or upholstery damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Let us know if there are any stains, tears or burns to the interior.</Form.Label>
                                                    <div style={{ marginBottom: "100px" }} />
                                                    <Row>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewInterior(1)} active={newInterior == 1 ? true : false}>Yes</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className='btn btn-secondary w-100' onClick={() => setNewInterior(0)} active={newInterior == 0 ? true : false}>No</Button>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>

                                        </div>
                                        {/* <div className="text-start">
                                            <Row>
                                                <Col md={8} className="mx-auto">
                                                    <Form.Label><h2>What's the damage?</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Please select from the following:</Form.Label>
                                                    <div style={{ marginBottom: "50px" }}></div>
                                                    <Form.Check type="checkbox" label="Has stains" checked={newHasStains} onChange={e => setNewHasStains(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Has tears" checked={newHasTears} onChange={e => setNewHasTears(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Has burns" checked={newHasBurns} onChange={e => setNewHasBurns(e.target.checked)} />
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                            <div style={{ marginBottom: "100px" }}></div>
                                        </div> */}
                                        {/* <div>
                                            <Row>
                                                <Col md={8} className="mx-auto text-start">
                                                    <Form.Label><h2>Wrapping up</h2></Form.Label>
                                                    <br />
                                                    <Form.Label>Our assumptions</Form.Label>
                                                    <br />
                                                    <Form.Label>To speed up your appraisal, we have made the following assumptions about your car.</Form.Label>
                                                    <br />
                                                    <Form.Label>Untick any that don't apply</Form.Label>
                                                    <br />
                                                    <Form.Check type="checkbox" label="I don't have a private plate to keep" checked={newWrapPrivatePlate} onChange={e => setNewWrapPrivatePlate(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="This car comes with two keys" checked={newWrapTwoKeys} onChange={e => setNewWrapTwoKeys(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Has over 3 months MOT" checked={newWrapOverMOT} onChange={e => setNewWrapOverMOT(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Has V5C logbook" checked={newWrapLogbook} onChange={e => setNewWrapLogbook(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Is not a category S/C or N/D" checked={newWrapSC} onChange={e => setNewWrapSC(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="No missing parts" checked={newWrapMissingPart} onChange={e => setNewWrapMissingPart(e.target.checked)} />
                                                    <p style={{ marginLeft: "25px" }}>(E.g. spare wheel, locking nut, inflation kit and parcel sheif)</p>
                                                    <Form.Check type="checkbox" label="No faulty electrics" checked={newWrapFaultyElectrics} onChange={e => setNewWrapFaultyElectrics(e.target.checked)} />
                                                    <p style={{ marginLeft: "25px" }}>(E.g. seats, sunroof, media player, SAT NAV media)</p>
                                                    <Form.Check type="checkbox" label="No mechanical issues" checked={newWrapMechanicalIssues} onChange={e => setNewWrapMechanicalIssues(e.target.checked)} />
                                                    <p style={{ marginLeft: "25px" }}> (E.g engine, clutch, brakes or gearbox)</p>
                                                    <Form.Check type="checkbox" label="No modifications" checked={newWrapNoModification} onChange={e => setNewWrapNoModification(e.target.checked)} />
                                                    <p style={{ marginLeft: "25px" }}>(E.g seats removed, ride height, body kit, wrapped)</p>
                                                    <Form.Check type="checkbox" label="No mileage alterations" checked={newWrapNoMileageAlteration} onChange={e => setNewWrapNoMileageAlteration(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Is not imported" checked={newWrapIsNotImported} onChange={e => setNewWrapIsNotImported(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Is right-hand drive" checked={newWrapRightHandDrive} onChange={e => setNewWrapRightHandDrive(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Not ex-driving school" checked={newWrapExDriveSchool} onChange={e => setNewWrapExDriveSchool(e.target.checked)} />
                                                    <Form.Check type="checkbox" label="Has not been used for Taxi/Private hire" checked={newWrapTaxi} onChange={e => setNewWrapTaxi(e.target.checked)} />
                                                     <div style={{marginBottom: "20px"}}></div>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <Row>
                                            <Col md={8} className="mx-auto">
                                                <button
                                                    type="button"
                                                    className="btn nextButton w-100"
                                                    onClick={() => { stepperRef.current.next() }}
                                                >
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="SubDetailPage py-5">
            <div className='Section-title text-center'>Vehicle information</div>
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
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <NavLink to="/detail/1" className="fw-bold nav-link">Back</NavLink>
                    </div>
                    <div>
                        <NavLink to="/book/1" className="fw-bold nav-link">Next</NavLink>
                    </div>
                </div>

            </Container>
        </div>
    )
}

