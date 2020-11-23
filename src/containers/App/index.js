import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../NavBar';
import ResultsList from '../ResultsList';
import About from '../About';
import SimpleAlert from '../SimpleAlert';
import { Google_API, Bing_API } from '../../config/api';
import { useDispatch } from 'react-redux';
import { showAlert } from '../SimpleAlert/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Google_API.params.key || !Google_API.params.cx || !Bing_API.key) {
      dispatch(
        showAlert({
          type: 'warning',
          title: 'Configuration needed',
          message:
            'You must configure the API completing the keys and the cx in src/config/api.js.',
        })
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <SimpleAlert />
      <Switch>
        <Route exact path='/' children={<ResultsList />} />
        <Route exact path='/about' children={<About />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
