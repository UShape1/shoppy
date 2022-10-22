import Shop from "./Shop";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

const Shops = ({ shops }) => {
  return (
    <div className="Shops">
      <Container>
        <Row xs="auto" md="auto" lg="auto" className="justify-content-center">
          {shops.map((shop) => (
            <Col key={shop.id} className="justify-content-center">
              <Shop shop={shop} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shops;
