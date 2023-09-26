import { Col, Container, Image, Row, Accordion, Form, InputGroup, Card, Nav, Button } from "react-bootstrap";
import { PostCodeBanner, WorkFlowBanner } from "../components/banners";
import { BankBadge, CashBadge, CheckboxIcon, EditIcon, FaqIcon, IntroBanner, PriceBadge, SecureBadge, ServiceBanner, TagBadge, TimeBadge, WomanBanner } from "../assets";
import { FormCard } from "../components/cards";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { VehicleContext } from "../context/context";
import { Loading } from "../components/layouts/loading";

function HomePage() {
  const { isLoading } = useContext(VehicleContext);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="HomePage">
          <section className="MainSection py-5" id="mainsection">
            <Container>
              <Row className="justify-content-end">
                <Col sm={12} lg={4} className="py-5">
                  <FormCard />
                </Col>
              </Row>
            </Container>
          </section>
          <WorkFlowBanner />
          <section className="BuySection py-5">
            <Container>
              <Row className="align-items-center mb-5">
                <Col sm={12} lg={7} className="mb-2">
                  <Image src={WomanBanner} width="100%" className="rounded rouneded-2" />
                </Col>
                <Col sm={12} lg={5} className="mb-2">
                  <div className="Banner-title  text-uppercase text-center text-lg-start">Buy my car for cash</div>
                  <div className="Banner-content ">Simply enter your reg number to get your instant valuation for free and sell your car without the hassle.</div>
                  {/* <Nav.Link href="#mainsection" className="nav-link"> */}
                  <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Enter Reg</Form.Label>
                      <Nav.Link href="#mainsection" className="nav-link">
                        <Row className="bg-white px-0 rounded rounded-1">
                          <Col sm={2} className="bg-yellow rounded rounded-1"><InputGroup.Text id="basic-addon1"><Image src={EditIcon} width="25" /></InputGroup.Text></Col>
                          <Col sm={8}><Button className="w-75 bg-white border text-start text-main-black-50 border-0 w-100 text rounded rounded-0 h-100">eg.<strong>N4SXE</strong></Button></Col>
                          <Col sm={2}><Image src={CheckboxIcon} height="65" /></Col>
                        </Row>
                      </Nav.Link>
                    </Form.Group>
                  {/* </Nav.Link> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-black-75">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center"><Image src={PriceBadge} width="42" className="me-3" />4-day price guarantee</Card.Title>
                      <Card.Text className="text-center">
                        Your car valuation is guaranteed for 4 days after you obtain a quote by entering your reg number. This means you have the flexibility to book an appointment at a time that suits you and are protected from market fluctuations.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-white bg-transparent border border-0">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center"><Image src={TimeBadge} width="42" className="me-3" />sell your car in under an hour</Card.Title>
                      <Card.Text className="text-center">
                        We will buy your car in under an hour, regardless of the make, model, mileage or condition. Start the process by getting a free valuation in less than 30 seconds.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-white border-light pb-lg-5 bg-transparent">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center"><Image src={TagBadge} width="42" className="me-3" />no obligation to sell</Card.Title>
                      <Card.Text className="text-center">
                        We don’t use pushy sales tactics. Instead, we provide a no-hassle assessment of your vehicle and allow you to decide whether you want to go ahead with the sale of your car.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-white border-light pb-lg-3 bg-transparent">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center"><Image src={SecureBadge} width="42" className="me-3" />avoid the hassle of a private sale</Card.Title>
                      <Card.Text className="text-center">
                        You can avoid the hassle of a private sale by selling your car through our simple three-step process.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-white border-light pb-lg-3 bg-transparent">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center"><Image src={BankBadge} width="42" className="me-3" />We settle any finance</Card.Title>
                      <Card.Text className="text-center">
                        Are you looking to sell a car with outstanding finance? No problem, we can settle it!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4} className="mb-4">
                  <Card className="rounded rounded-0 text-black-75">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center mb-2"><Image src={CashBadge} width="42" className="me-3" />have the money in your bank in 30 minutes</Card.Title>
                      <Card.Text className="text-center">
                        By choosing our Premier Payment option, you can have the money in your bank in as little as 30 minutes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="IntroSection py-5">
            <Container>
              <Row className="py-5 align-items-center">
                <Col sm={12} lg={6} className="mb-2">
                  <div className="Banner-title pe-2 me-1 pe-lg-5 me-lg-5 text-uppercase text-center text-lg-start">Why Sell you car ?</div>
                  <div className="Banner-content pe-2 me-1 pe-lg-5 me-lg-5">Whether it’s time for you to upgrade your car or you simply don’t need your vehicle anymore, you will want to know how much your car is worth. Our free car valuation tool provides you with a valuation in under 30 seconds - simply enter your reg plate and a few details about your car for an accurate valuation. If you’re happy with your valuation, you can sell your car in less than an hour by booking an appointment at your local branch, which is less than 13 minutes away on average.</div>
                </Col>
                <Col sm={12} lg={6} className="mb-2">
                  <Image src={IntroBanner} width="100%" />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="ServiceSection py-5">
            <Container>
              <Row className="align-items-center py-5">
                <Col sm={12} lg={6} className="mb-2 text-center">
                  <Image src={ServiceBanner} width="100%" />
                </Col>
                <Col sm={12} lg={6} className="mb-2 pe-2 pe-lg-5">
                  <div className="Banner-title pe-2 me-1 pe-lg-5 me-lg-5 text-uppercase text-center text-lg-start">A quick and easy car buying service</div>
                  <div className="Banner-content pe-2 me-1 pe-lg-5 me-lg-5">Webuyanycar strive to be the quickest car buying service, where you can sell your car without the hassle. From the moment you get your free online valuation through to the moment one of our friendly branch managers process the purchase of your car, our process is designed to make the act of buying your car quick, easy, safe and incredibly convenient.</div>
                </Col>
              </Row>
              <div className="Section-title text-uppercase text-center mt-5 py-5" id="Faqsection">Frequently asked questions</div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header><Image src={FaqIcon} width="25" className="me-3" />Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><Image src={FaqIcon} width="25" className="me-3" />Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><Image src={FaqIcon} width="25" className="me-3" />Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><Image src={FaqIcon} width="25" className="me-3" />Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </section>
          <PostCodeBanner />
        </div>

      )}
    </>
  );
}

export default HomePage;
