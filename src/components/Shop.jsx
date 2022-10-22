import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Shop = ({ shop }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={shop.photo_url} width={287} height={180} />
      <Card.Body>
        <Card.Title>{shop.name}</Card.Title>
        <Card.Text>Shop here and get {shop.points} points!</Card.Text>
        <Button
          variant="primary"
          href={shop.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See on Google Maps
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Shop;
