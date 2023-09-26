import { Col, Container, Image, Row, Accordion, Form, InputGroup, Card, Nav, Button } from "react-bootstrap";
import { BankBadge, CashBadge, CheckboxIcon, EditIcon, FaqIcon, IntroBanner, PriceBadge, SecureBadge, ServiceBanner, TagBadge, TimeBadge, WomanBanner } from "../assets";
import { UserTable } from "../components/userTable";
import { NavLink, useLocation } from "react-router-dom";
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
        <div className="">
            <Container>
              <UserTable />
            </Container>
        </div>

      )}
    </>
  );
}

export default AdminLogin;
