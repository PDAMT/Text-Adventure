import * as React from 'react';
import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface StoryContextState {
  prompt: string,
  updatePrompt: Dispatch<SetStateAction<string>>,
  hint: string,
  updateHint: Dispatch<SetStateAction<string>>,
  room: number, 
  updateRoom: Dispatch<SetStateAction<number>>, 
  answer: string,
}

const StoryContext = React.createContext<any|undefined>(undefined);

const StoryContextProvider = ({ children }: any) => {
  const [prompt, updatePrompt] = React.useState<string>('Welcome Players');
  const [hint, updateHint] = React.useState<string>('SomeHint');
  const [room, updateRoom] = React.useState<number>(1); 
  const [answer, updateAnswer] = React.useState<string>('Hello'); 

  const StoryState: StoryContextState = {
    prompt,
    updatePrompt,
    hint,
    updateHint, 
    room,
    updateRoom,
    answer
  };
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