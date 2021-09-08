import '../MyCoverLetters/MyCoverLetters.css'
import { useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const paperStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '58%',
        height: '70%',
      },
    },
  }));

  const bttnStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function AddLetter() {
    const userstore = useSelector(store => store.user);
    const paperclasses = paperStyles();
    const bttnclasses = bttnStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    //Local States for each paragraph
    const [templateTitle, settemplateTitle] = React.useState('');
    const [paragraphOne, setparagraphOne] = React.useState('');
    const [paragraphTwo, setparagraphTwo] = React.useState('');

    const sendtexttoServer = () => {
        return (
            axios.post('/api/user/add-cover-letter', {templateTitle: templateTitle, paragraphOne: paragraphOne, paragraphTwo: paragraphTwo, userid: userstore.id}),
            history.push('/mycoverletters')
        ) 
    }

    return (
        <div>
            <div id="mycoverletter-container">
                <h1 id = "mycoverletter-heading"> Add Letter </h1>
            </div>
            <div id = "paper-id" className={paperclasses.root}>
                <Paper elevation={3}>  
                {/* TEMPLATE NAME INPUT */}
                <h3 className="center">Template Name</h3>
                    <TextField 
                        variant="outlined"
                        type="text"
                        fullWidth
                        multiline
                        required
                        value={templateTitle}
                        onChange={(event) => settemplateTitle(event.target.value)} 
                    />
                {/* PARAGRAPH ONE INPUT */}
                    <h5 className="center">Paste Paragraph One (No indents or spacing)</h5>
                    <TextField 
                        variant="outlined"
                        type="text"
                        fullWidth
                        multiline
                        required
                        value={paragraphOne}
                        onChange={(event) => setparagraphOne(event.target.value)} 
                    />
                {/* PARAGRAPH TWO INPUT */}
                    <h5 className="center">Paste Paragraph Two (No indents or spacing)</h5>
                    <TextField 
                        variant="outlined"
                        type="text"
                        multiline
                        fullWidth
                        required
                        value={paragraphTwo}
                        onChange={(event) => setparagraphTwo(event.target.value)} 
                    />
                </Paper> 
            </div>

            <div className = {bttnclasses} className="center">
                <Button onClick={sendtexttoServer} variant="contained" color="primary">
                    Add Template
                </Button>
            </div>
        </div>
    )
}

export default AddLetter;