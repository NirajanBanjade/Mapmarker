import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function TextLinkExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item style={{ padding: "5px 10px 5px 20px" }}>
        <Nav.Link as={Link} to="/home">Homepage</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ padding: "5px 10px 5px 20px" }}>
        <Nav.Link as={Link} to="/mapview">Map-View</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TextLinkExample;
