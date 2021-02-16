import * as React from 'react';
import { useContext } from 'react';

interface StoryState {
  prompt: string,
  updatePrompt: void
}

// axios.get('/prompt', {
//   params: { "room": room }
// })
//   .then((prompt: AxiosResponse) => {
//     updatePrompt(prompt.data);
//   })
//   .catch((err: 'string') => console.log(err));

const StoryState = {
  prompt: 'Welcome Players',
  updatePrompt: 
}

const StoryContext = React.createContext();

const StoryContextProvider = ({ children }) => {
  const [prompt, updatePrompt] = React.useState<string | null>('Welcome Players');
  return (
    <StoryContext.Provider value={{prompt, updatePrompt}}>
      {children}
    </StoryContext.Provider>
  )
}