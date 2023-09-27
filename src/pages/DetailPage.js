import { Col, Container, Row, Carousel, Image, Card, Button } from "react-bootstrap";
import { WorkFlowBanner } from "../components/banners";
import CarImage from '../assets/images/models/car.jpg';
import { Link, useNavigate } from "react-router-dom";
import {Stepper} from "../components/stepper";
import { useContext } from "react";
import { VehicleContext } from "../context/context";

export default function DetailPage() {
    const {price, imageDetailsList} = useContext(VehicleContext);
    const navigate = useNavigate();
    return (
        <div className="DetailPage py-5">
            <Container>
                <Row>
                    <Col sm={12} lg={4} className="mb-2">
                        <Carousel className="mb-3">   
                        {      
                            imageDetailsList.map( (value, index) => (
                                <Carousel.Item key={index}>
                                    <Image src={value.ImageUrl} width="100%" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }                            
                        </Carousel>
                        {/* <div className="detail-status-group">
                            <div className="detail-status-title mt-5">Assumptions & add damage for an accurate valuation</div>
                            <ul className="detail-status-list">
                                <li>Sale may be subject to a transaction fee</li>
                                <li>We will inspect your vehicle. Our price offer may change if we think it is affected by the vehicle's condition or history.</li>
                                <li>Your valuation is guaranteed for 4 days only.</li>
                            </ul>
                            <div className="detail-status-title mt-5">Assumptions we've made about your vehicle:</div>
                            <ul className="detail-status-list">
                                <li>It has no damage, including interior or mechanical.</li>
                                <li>It isn't a non runner.</li>
                                <li>It has 6+ months MOT left.</li>
                                <li>It hasn't been declared as an insurance write-off or damaged in an accident.</li>
                                <li>It has two sets of keys.</li>
                                <li>It has 1 previous owner.</li>
                                <li>It has full service history.</li>
                            </ul>
                            <div className="detail-status-title mt-5">Before booking an appointment, check all assumptions are correct and add any vehicle damage, to ensure you obtain an accurate price.</div>
                            <Link to="/detail/1/subdetail" className="text-black fw-bold">Update assumptions & add damage</Link>
                        </div> */}
                    </Col>
                    <Col sm={12} lg={8} className="mb-2">                                
                        <Card className="rounded rounded-0 ValuationCard text-center p-4 mb-3">
                            <Card.Body>
                                <Card.Subtitle>Valued @</Card.Subtitle>
                                <Card.Title>{price}</Card.Title>
                                <Card.Text>Based on 105,764 offers for Mercedes vehicles from 2,743 dealers on Motors4cash.</Card.Text>
                            </Card.Body>
                        </Card>                        
                        <Card className="ValuationCard text-center p-4 mb-3 border border-0 shadow">
                            <Card.Body>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="text-start vehicle-info">
                                        <div className="vehicle-info-title">Vehicle information</div>
                                        <div className="vehicle-info-text">Features, equipment & ownership</div>
                                    </div>
                                    <Button className="bg-main-black-50 border border-0 start-button w-50" onClick={() => navigate("/detail/1/subdetail")}>START</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <WorkFlowBanner />
        </div>
    )
}