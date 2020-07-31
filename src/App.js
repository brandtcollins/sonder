import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar/Sidebar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NoteList from "./components/NoteList/NoteList";
import Note from "./components/Note/Note";

function App() {
  const Sonder = createMuiTheme({
    typography: {
     "fontFamily": `"Poppins"`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500,
     caption: {
       fontFamily: "Barlow",
     },
     subtitle1: {
       fontSize: "1.25rem",
       fontWeight: 700,
     },
     body2: {
       fontSize: ".80rem",
     }
    }
 });

  return (
    <MuiThemeProvider theme={Sonder}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={4}>
          <NoteList/>
        </Grid>
        <Grid item xs={6}>
          <Note />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
