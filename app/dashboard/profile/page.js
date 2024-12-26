import Profile from "@/app/_components/dashboardComponents/Profile";
import Sidenav from "@/app/_components/Sidenav";
import { Row ,Col } from "react-bootstrap";
const page = () => {
  return (
    <>
      <Row>
        <Col sm={3}><Sidenav /></Col>
        <Col sm={9}><Profile /></Col>
      </Row>
    </>
  )
};
export default page;
