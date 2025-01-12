import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HouseObject } from "../hooks/useHouse";
interface Props {
  house: HouseObject;
}
function BootstrapCard({ house }: Props) {
  return (
    <Card style={{ width: "50rem", height: "5rem" }}>
      <Card.Img
        variant="top"
        width={171}
        height={"4px"}
        crossOrigin="anonymous"
        src={house.main_picture}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BootstrapCard;
