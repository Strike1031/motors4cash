import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { YLogo, TwitterIcon, TelegramIcon, InstagramIcon, FacebookIcon } from "../../assets";

export default function Footer() {
    return (
        <div className="Footer bg-black pt-5 pb-4 text-center text-lg-start">
            <Container>
                <Image src={YLogo} height="42" className="Footer-logo"/>
                <Row className="my-2">
                    <Col sm={12} lg={4}>
                        <div className="Footer-nav mb-5">
                            <div className="Footer-nav-title text-white">Services</div>
                            <ul className="Footer-nav-list list-unstyled">
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Car Valuation</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Scrap my Car</Link></li>
                            </ul>
                        </div>
                        <div className="Footer-nav mb-5">
                            <div className="Footer-nav-title text-white">Tips & Guides</div>
                            <ul className="Footer-nav-list list-unstyled">
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Valuation Guides</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Selling & buying guides</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Car Ownership guides</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Car maintenace guides</Link></li>
                            </ul>
                        </div>

                    </Col>
                    <Col sm={12} lg={4}>
                        <div className="Footer-nav  mb-5">
                            <div className="Footer-nav-title text-white">Services</div>
                            <ul className="Footer-nav-list list-unstyled">
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Frequently asked questions</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Branch locator</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">About us</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Unsubscribe</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Our affiliate programme</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Modern Slavery Act Statement</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Gender Pay Gap Report</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Tax Strategy</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Free Car Check</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">MOT Check</Link></li>
                                <li className="Footer-nav-list-item"><Link to="" className="text-white text-decoration-none">Car Tax Check</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} lg={4}>
                        {/* <div className="Footer-nav  mb-5">
                            <div className="Footer-nav-title text-white">Services</div>
                            <ul className="Footer-nav-list list-unstyled">
                                
                            </ul>
                        </div> */}
                        <div className="Footer-nav  mb-5">
                            <div className="Footer-nav-title text-white">Find us on Social Media</div>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <Link to="" className="nav-link"><Image src={TwitterIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={TelegramIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={InstagramIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={FacebookIcon} width="45" className="me-2"/></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="text-center text-white copyright">©Motors4.cash</div>
            </Container>
        </div>
    );
}