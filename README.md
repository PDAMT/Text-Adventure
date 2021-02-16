# Text-Adventure

Intended Functionality:


1. Two users must guess the correct answer to the prompts. Whomever guessess all prompts correctly first wins. 
2. When guessed correctly, the content of each child component is re-rendered with new text, and new information is fetch'd from the database.
3. When a player wins, their username is stored in the database. When the losing player reaches the end, they are informed that <player> has already won. Database should then flush user data.

Tech-Stack:

Front-End.
1. Typescript
2. React Hooks
3. Axios AJAX calls
4. Context API state management
5. React
6. Babel transpiler

Back-End.
1. Node
2. Express

Database:
PostgreSQL

Unfinished:

Gameplay:
Points 1 and 3 in Intended Functionality are unfinished.

Hint.tsx
  - does not access state from Context API.
  - fetch request should be replaced with an Axios call to maintain consistency with the rest of the codebase.
  
  Expected functionality:
    - should render text on 3 incorrect submissions

Prompt.tsx:
  -currently, Prompt.tsx will fetch a new prompt from DB after the 2nd correct answer, but there are no more prompts articulated in DB, so request errors out.

webpack.config.js
  - there is no proxy between 3000 and 8080. This has lead to confusing behavior between Localhost:3000 and Localhost:8080, where one would break but the other would function properly.

Client-server interaction bug:
  - whenever a user is typing into the terminal, the front end components are constantly sending AJAX calls to DB, which are being logged to VSCode's terminal.

Note: 

Currently, when 'npm run dev' is executed, the root file tree is rendered to the browser. We're unsure why, and the workaround is to run 'npm run build' to bundle the front end.
Then, copy index.html from Text-Adventure/src and paste it into dist, which store the output of the bundled front-end. 
We think the problem lies in the pathing on line 14 of Text-Adventure/client/src/index.ts.