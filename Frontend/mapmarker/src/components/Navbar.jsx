

import Nav from 'react-bootstrap/Nav';

function TextLinkExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item style={{padding:"5px 10px 5px 20px"}}>
        <Nav.Link href="/home">Homepage</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{padding:"5px 10px 5px 20px"}}>
        <Nav.Link href="/mapview">Map-View</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}




export default TextLinkExample;