import React from 'react';
import {render} from 'react-dom';
require('../public/style.scss');

/*=== Components ===*/
import Search from './components/Com_search';

class App extends React.Component {
  render () {
    return(<Search />);
  }
}

render(<App />, document.getElementById('app'));