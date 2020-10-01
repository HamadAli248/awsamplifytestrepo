import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const CALLBACK_PATH = '/homepage';

const App = () => { 
  return (
    <Router>
      <Route path={CALLBACK_PATH} />
    </Router>
  );
};

export default App;