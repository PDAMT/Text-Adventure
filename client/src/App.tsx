import * as React from 'react';
import HomePageRenderer from '../components/HomePageRenderer'
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <div id="app">
        <HomePageRenderer room={1}/>
      </div>
    </>
  )
};

export default App;