import { Col, Row } from "react-bootstrap"
import AllProduct from "../../_components/dashboardComponents/AllProduct"
import Sidenav from "@/app/_components/Sidenav"

const page = () => {
  return (
    <Row>
      <Col sm={3}><Sidenav /></Col>
      <Col sm={9}><AllProduct /></Col>
    </Row>
  )
}

export default page
