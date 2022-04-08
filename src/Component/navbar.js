import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

export default class Navbarr extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Button variant="outline-success">Search</Button>
        </Container>
      </Navbar>
    );
  }
}
