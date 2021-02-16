import * as React from 'react';
import * as ReactDom from 'react-dom'; 
import axios, {AxiosResponse} from 'axios'; 



/*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*/
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
/*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*/
// const axios = require('axios')
type roomProps = {
    room: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const roomPrompt = ({room}: roomProps) => {
const classes = useStyles();
const [prompt, updatePrompt] = React.useState<string | null>('Welcome Players');

 React.useEffect(() => {
    const roomNum: string = '2'; 
    const dbQuery = '/api/prompts/' + roomNum; 

    axios.get(dbQuery)
      .then((res: AxiosResponse) => {
        const { prompt } = res.data[0];
        console.log(' updated', prompt)
        updatePrompt(prompt); 
      })
      .catch((err: 'string') => console.log(err));
    },[]);

    return (
        <div className="promptBox">
            {/* <div className="promptText">{prompt}</div> */}
            <Paper className={classes.root} elevation={12}>{prompt}</Paper>
        </div>
    )
}

export default roomPrompt; 

