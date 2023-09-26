import { Container } from "react-bootstrap";
import { ManageStepper } from "../components/stepper";
import { WorkFlowBanner } from "../components/banners";

export function AppointmentDetailPage () {
    return (
        <div className="AppointmentDetailPage py-5">
            <Container>
                <ManageStepper/>
            </Container>
            <WorkFlowBanner/>
        </div>
    )
}