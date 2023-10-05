import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { YLogo, TwitterIcon, TelegramIcon, InstagramIcon, FacebookIcon } from "../../assets";

export default function Footer() {
    return (
        <div className="Footer bg-black pt-5 pb-4 text-center">
            <Container>
                <Image src={YLogo} height="42" className="Footer-logo"/>
                <Row className="my-2">
                    <Col sm={12} lg={4}></Col>                    
                    <Col sm={12} lg={4}>
                        <div className="Footer-nav  mb-5">
                            <div className="d-flex align-items-center justify-content-center">
                            <Link to="" className="nav-link"><Image src={TwitterIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={TelegramIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={InstagramIcon} width="45" className="me-2"/></Link>
                            <Link to="" className="nav-link"><Image src={FacebookIcon} width="45" className="me-2"/></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={4}></Col>  
                </Row>
                <div className="text-center text-white copyright">©Motors4.cash</div>
            </Container>
        </div>
    );
}