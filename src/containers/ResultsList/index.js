import React from 'react';
import { useSelector } from 'react-redux';
import {
  googleStateSelector,
  bingStateSelector,
  appLoadingSelector,
} from '../App/selectors';

import BasicPagination from '../BasicPagination';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';

function ResultsList() {
  const googleState = useSelector(googleStateSelector);
  const bingState = useSelector(bingStateSelector);
  const loading = useSelector(appLoadingSelector);
  const empty =
    googleState.results.length === 0 && bingState.results.length === 0;

  return (
    <Container fluid>
      {empty && (
        <Row>
          <Col />
          <Col>
            <h2>
              Welcome, you can search in <b>Google</b> or <b>Bing</b>
            </h2>
          </Col>
          <Col />
        </Row>
      )}
      {loading && (
        <Row className='center'>
          <Col>
            <Spinner animation='border' />
          </Col>
        </Row>
      )}
      {!loading && googleState.results.length > 0 && (
        <Row>
          <Col>
            <SEResult SEState={googleState} title='Google' />
          </Col>
        </Row>
      )}
      {!loading && bingState.results.length > 0 && (
        <Row>
          <Col>
            <SEResult SEState={bingState} title='Bing' />
          </Col>
        </Row>
      )}
    </Container>
  );
}

function SEResult({ SEState, title }) {
  return (
    <Container fluid>
      <Row>
        <Col className='SE-title'>
          <h2>{title}</h2>
          <div>
            <b>{SEState.totalResults}</b> Results for <b>{SEState.q}</b>
          </div>
          <div>
            Page <b>{SEState.offset + 1}</b>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          {SEState.loading && (
            <Row>
              <Col>
                <Spinner animation='border' />
              </Col>
            </Row>
          )}
          {!SEState.loading &&
            SEState.results.map((item) => (
              <Container fluid key={item.id} className='response'>
                <Row>
                  <Col>
                    <b>
                      <a href={item.url}>{item.title}</a>
                    </b>
                  </Col>
                </Row>
                <Row>
                  <Col>{item.snippet}</Col>
                </Row>
              </Container>
            ))}
        </Col>
      </Row>
      <BasicPagination SEState={SEState} SE={title} />
    </Container>
  );
}
export default ResultsList;
