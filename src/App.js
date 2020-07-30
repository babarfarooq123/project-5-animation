// http://project_5b_animation.surge.sh/

import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import useWebAnimations from "@wellyshen/use-web-animations";
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: '#4527A4',
    },
  },
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#4527A4',
    color: 'white',
    border: '1px solid white',
    borderRadius: '10%',
    padding: '15px',
    
  },
}));


function App() {
  const classes = useStyles();

  const { ref } = useWebAnimations({ 
    keyframes: [
      {transform: 'translate(0,10px)'},
      {transform: 'translate(0,-10px)'},
      {transform: 'translate(0,10px)'},
    ],
    timing: {
      duration: 4000,
      iterations: Infinity,
      easing: 'ease-in-out',
    }
   });

  return (

    <div>
        <div className='mainBack'>
          <div className='mainBlankChild'></div>
          <div className='logo'><img src={'http://azim.commonsupport.com/Appway/images/logo.png'} alt='Logo Image' /></div>
        
          <br />
          <br />
        
            <Container fixed>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Grid item xs={12} sm={6}>
                  <div className='mobilediv1'>
                    <h1 className='mobileh1'>Profect App For<br />Boost Your Business</h1>
                    <p className='mobilep'>The collapse of the online-advertising market in 2001 made<br />marketing on the Internet seem even less compelling.</p>
                  </div>
                  <ColorButton variant="contained" className={classes.margin}>
                    Get App Now
                </ColorButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <div ref={ref} className='mpic-img'>
                    <img className='pic1' src={'http://azim.commonsupport.com/Appway/images/resource/phone-1.png'} alt='Mobile Pic 1' />
                    <img className='pic2' src={'http://azim.commonsupport.com/Appway/images/resource/phone-2.png'} alt='Mobile Pic 2' />
                  </div>
              </Grid>
          </Grid>
          </Container>
        </div>
        
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
    </div>
  );
}

export default App;
