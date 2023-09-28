import { Container, Row, Col, Carousel, Form, InputGroup, Button, Image } from "react-bootstrap";
import { Loading } from "../components/layouts/loading";
import { toast } from 'react-toastify';
import { ContactCard } from "../components/cards";

export default function ContactPage() {

    return (
        <>
            <div className="ContactPage">
                <section className="MainSection py-5" id="mainsection">
                    <Container>
                        <Row className="justify-content-end">
                            <Col sm={12} lg={4} className="py-5">
                                <div className="text-center fs-1 fw-bold">
                                    Thank &nbsp;&nbsp;you!
                                </div>
                                <ContactCard />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>

    )
}