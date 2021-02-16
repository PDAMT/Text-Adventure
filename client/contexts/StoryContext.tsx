import * as React from 'react';
import {useContext} from 'react';

interface StoryState {
  prompt: string,
  updatePrompt: void
}

const StoryState = {
  prompt: 'Welcome Players',
  updatePrompt: 
}

const StoryContext = React.createContext();

const StoryContextProvider = ({children}) => {
  const [prompt, updatePrompt] = React.useState<string | null>('Welcome Players');
  return (

  )
}
