import { Col, Container, Image, Row, Accordion, Form, InputGroup, Card, Nav, Button } from "react-bootstrap";
import { PostCodeBanner, WorkFlowBanner } from "../components/banners";
import { BankBadge, CashBadge, CheckboxIcon, EditIcon, FaqIcon, IntroBanner, PriceBadge, SecureBadge, ServiceBanner, TagBadge, TimeBadge, WomanBanner } from "../assets";
import { FormCard } from "../components/cards";
import { AdminLoginCard } from "../components/cards";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { VehicleContext } from "../context/context";
import { Loading } from "../components/layouts/loading";

function AdminLogin() {
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
                  <AdminLoginCard />
                </Col>
              </Row>
            </Container>
          </section>
        </div>

      )}
    </>
  );
}

export default AdminLogin;
