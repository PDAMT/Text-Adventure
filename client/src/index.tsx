import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../stylesheets/styles.css';
import App from './App';
import { StoryContextProvider } from '../contexts/StoryContext';

ReactDOM.render(
  <StoryContextProvider>
    <App />
  </StoryContextProvider>,
  document.getElementById('root')
);