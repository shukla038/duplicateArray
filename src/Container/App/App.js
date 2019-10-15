import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import DuplicateArray from 'Container/DuplicateArray/Lodable'
import 'styles/globalStyle.scss';

function App(props) {
  return (
    <div className='App'>
    <Helmet>
      <meta name='description' content="A React.js Boilerplate application" />
    </Helmet>
      <Switch>
        <Route exact path='/' component={DuplicateArray}/>
        <Route path='/duplicate-array' component={DuplicateArray}/>
      </Switch>
    </div>
  );
}

export default App;
