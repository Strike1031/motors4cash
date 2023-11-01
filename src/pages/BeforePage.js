import { Container, Row, Col,  Form, InputGroup, Button, Image } from "react-bootstrap";
import EditIcon from '../assets/images/icons/edit.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function BeforePage() {
    const [refNum, setRefNum] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <div className="BeforePage">
                <section className="MainSection py-5 d-flex align-items-center" id="mainsection" style={{minHeight:"56vh"}}>
                    <Container>
                        <Row className="align-items-center justify-content-center justify-content-md-end">
                            <Col sm={12} lg={4} className="py-5 text-center">
                                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Reference Number</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text>
                                        <Form.Control
                                            placeholder=""
                                            aria-label="password"
                                            aria-describedby="basic-addon1"
                                            value={refNum}
                                            onChange={(e) => setRefNum(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Button className="ValueCar-submit w-100" onClick={() => navigate(`/appointment/${refNum}`)}>
                                    Manage Appointment
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>

    )
}