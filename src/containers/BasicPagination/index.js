import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import { FETCH_RESULTS_PAGED } from '../App/constants';

function BasicPagination({ SEState, SE }) {
  const dispatch = useDispatch();
  const offset = useMemo(
    () => ({
      Next: SEState.offset + 1,
      Prev: SEState.offset - 1 > 1 ? SEState.offset - 1 : 0,
    }),
    [SEState]
  );

  const handleClickPrev = (e) => {
    dispatchPage({ newOffset: offset['Prev'] });
  };
  const handleClickNext = (e) => {
    dispatchPage({ newOffset: offset['Next'] });
  };

  const dispatchPage = ({ newOffset }) => {
    dispatch({
      type: FETCH_RESULTS_PAGED,
      payload: {
        q: SEState.q,
        offset: newOffset,
        SE,
      },
    });
  };

  return (
    <Row float='center'>
      <Col md={5}></Col>
      <Col md={2}>
        <Pagination>
          <Pagination.Prev onClick={handleClickPrev} />
          <Pagination.Next onClick={handleClickNext} />
        </Pagination>
      </Col>
      <Col md={5}></Col>
    </Row>
  );
}

export default BasicPagination;
