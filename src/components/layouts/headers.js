import { Navbar, Container, Nav, Image, Row, Col } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { WLogo } from "../../assets";
import _model from '../../assets/images/models/mescedes.png';
import { useContext } from "react";
import { VehicleContext } from "../../context/context";

export function DefaultHeader() {
    const { id } = useParams();
    const { vehicleNumber, vehicleName, createdYear, color, mileage, price, bodyStyle, fuelType } = useContext(VehicleContext);
    return (
        <div className="DefaultHeader Header">
            <Navbar collapseOnSelect expand="lg" className="py-5">
                <Container>
                    <Navbar.Brand><Link to="/"><Image src={WLogo} height="35" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link text-uppercase">Car Valuation</NavLink>
                            <Nav.Link href="/#Faqsection" className="nav-link text-uppercase">FAQs</Nav.Link>
                            <NavLink to="/appointment" className="nav-link text-uppercase">Manage Appointment</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                id == 1 && vehicleNumber ? (
                    <Container className="pb-5">
                        <Row className="align-items-center">
                            <Col sm={12} md={2} lg={1} className="text-center mb-2"><Image src={_model} width="90" /></Col>
                            <Col sm={12} md={10} lg={11} className="model-info">
                                <div className="badge-group text-center text-md-start"><span className="me-2 bg-main-gray model-badge">{vehicleNumber}</span></div>
                                <div >
                                    <div className="model-name text-center text-md-start">{vehicleName}</div>
                                    <ul className="d-flex align-items-center flex-wrap">
                                        <li>{createdYear}</li>
                                        <li>{mileage}</li>
                                        <li>{color}</li>
                                        <li>{price}</li>
                                        <li>{bodyStyle}</li>
                                        <li>{fuelType}</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    ""
                )
            }
        </div>
    );
}

export function CustomizeHeader() {
    return (
        <div className="CustomizeHeader Header">
            <Navbar collapseOnSelect expand="lg" className="py-5">
                <Container className="text-center">
                    <Navbar.Brand><Link to="/"><Image src={WLogo} height="35" /></Link></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}



