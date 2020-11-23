import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { content_text } from '../../utils/constants';
import { useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { searchEngineSelector, qSelector } from '../App/selectors';
import './styles.css';
import {
  changeSearchEngine,
  fetchResults,
  changeInputValue,
} from '../App/actions';
import { showAlert, hideAlert } from '../SimpleAlert/actions';

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const searchEngine = useSelector(searchEngineSelector);
  const q = useSelector(qSelector);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const validates = () => {
    return !!q;
  };

  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'home':
        history.push('/');
        return;
      case 'about':
        history.push('/about');
        return;
      case 'search':
        if (validates()) dispatchFetch();
        else emptyInputAlert();
        return;
      default:
        return;
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'input':
        dispatch(changeInputValue(e.target.value));
        return;
      case 'searchEngineSelector':
        dispatch(changeSearchEngine(e.target.value));
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validates()) dispatchFetch();
    else emptyInputAlert();
  };

  const dispatchFetch = () => {
    dispatch(fetchResults());
    dispatch(hideAlert());
  };

  const emptyInputAlert = () => {
    dispatch(
      showAlert({
        type: 'danger',
        title: 'Write something!',
        message: 'You must write something in the input field on the navbar.',
      })
    );
    inputRef.current.focus();
  };
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand onClick={handleClick} name='navbar-title'>
        {content_text.NavBarTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link onClick={handleClick} name='home'>
            Home
          </Nav.Link>
          <Nav.Link onClick={handleClick} name='about'>
            About
          </Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2 mrg-r'
            ref={inputRef}
            name='input'
            value={q}
            onChange={handleChange}
          />
          <Form.Control
            as='select'
            size='sm-2'
            custom
            name='searchEngineSelector'
            className='mrg'
            value={searchEngine}
            onChange={handleChange}
          >
            <option value='any'>Both (Google and Bing)</option>
            <option value='google'>Google</option>
            <option value='bing'>Bing</option>
          </Form.Control>
          <Button
            onClick={handleClick}
            name='search'
            variant='outline-success'
            type='button'
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
