import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { css } from '@emotion/react';

const borderedGrid = css`
  text-align: center;
  div {
    background-color: rgba(39, 41, 43, 0.03);
    border: 1px solid rgba(39, 41, 43, 0.1);
    padding: 10px;
    margin-bottom: 20px;
`;

export default function ContainerPage() {
  return (
    <div className="pt-3" css={borderedGrid}>
      <h2>화면 너비에 따른 컨테이너 너비 비교</h2>
      <Container>
        <Row>
          <Col xs={3}>.col 1/2</Col>
          <Col xs={6}>.col 2/2</Col>
          <Col xs={3}>.col 2/23</Col>
        </Row>
        <Row>
          <Col sm>.col 1/3</Col>
          <Col sm>.col 2/3</Col>
          <Col sm>.col 3/3</Col>
        </Row>
      </Container>

      <Container>.container</Container>
      <Container fluid="sm">.container-sm</Container>
      <Container fluid="md">.container-md</Container>
      <Container fluid="lg">.container-lg</Container>
      <Container fluid="xl">.container-xl</Container>
      <Container fluid="fluid">.container-fluid</Container>
    </div>
  );
}
