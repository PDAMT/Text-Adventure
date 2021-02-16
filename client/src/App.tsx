import * as React from 'react';
import HomePageRenderer from '../components/HomePageRenderer'
import CssBaseline from '@material-ui/core/CssBaseline';

//wraps all children components in styling
const App = () => {
  return (
    <>
      <CssBaseline />
      <div id="app">
        <HomePageRenderer />
      </div>
      
    </>
  )
};

export default App;