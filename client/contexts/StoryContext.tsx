import * as React from 'react';
import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

//TypeScript type definitions for state
interface StoryContextState {
  prompt: string,
  updatePrompt: Dispatch<SetStateAction<string>>,
  hint: string,
  updateHint: Dispatch<SetStateAction<string>>,
  room: number, 
  updateRoom: Dispatch<SetStateAction<number>>, 
  answer: string,
  updateAnswer: Dispatch<SetStateAction<string>>
}

//create Context
const StoryContext = React.createContext<any|undefined>(undefined);

//define hooks which children can access
const StoryContextProvider = ({ children }: any) => {
  const [prompt, updatePrompt] = React.useState<string>('Welcome Players');
  const [hint, updateHint] = React.useState<string>('SomeHint');
  const [room, updateRoom] = React.useState<number>(1); 
  const [answer, updateAnswer] = React.useState<string>('Hello'); 

  //TypeScript type definitions of state properties
  const StoryState: StoryContextState = {
    prompt,
    updatePrompt,
    hint,
    updateHint, 
    room,
    updateRoom,
    answer,
    updateAnswer
  };

  //wrap all children in Provider tag, passing StoryState as value of 'value' property.
  //this gives all children components access to state articulated above
  return (
    <StoryContext.Provider value={StoryState}>
      {children}
    </StoryContext.Provider>
  )
}

export {
  StoryContextProvider,
}

export default StoryContext;