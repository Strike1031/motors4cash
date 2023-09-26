import { Button, Col, Container, Row, Form } from "react-bootstrap"
import { WorkflowItemCard } from "./cards"
import { WorkflowItemList } from "../contents"

export const PostCodeBanner = () => {
    return (
        <div className="PostCodeBanner py-5">
            <Container>
                <div className="Banner-title text-white text-center text-lg-start">Free collection <span>Nationwide</span></div>
                <Row>
                    {/* <Col sm={12} lg={4} className="mb-2">
                        <Form.Control id="postcode" placeholder="Enter your Postcode" />
                    </Col> */}
                    {/* <Col sm={12} lg={2} className="mb-2">
                        <Button className="postcode-submit px-4 w-100">Find Branch</Button>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export const WorkFlowBanner = () => {
    return (
        <div className="WorkFlowBanner py-5 text-center">
            <Container>
                <div className="Banner-title">HOW IT WORKS</div>
                <div className="Banner-subtitle">Sell your car in three simple steps</div>
                <Row className="position-relative">
                    {
                        WorkflowItemList.map((item, index) => (
                            <Col sm={12} lg={4} className="mb-2" key={index}>
                                <WorkflowItemCard image={item.image} title={item.title} subtitle={item.subtitle}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}