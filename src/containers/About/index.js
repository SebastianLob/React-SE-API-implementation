import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} />
        <Col md={6}>
          This site was created for implementing the Google and Bing Search
          engines API's. It was created by{' '}
          <a href='https://www.linkedin.com/in/agustinknaupp/'>
            Agustin Knaupp
          </a>
          .
        </Col>
        <Col md={3} />
      </Row>
    </Container>
  );
}
