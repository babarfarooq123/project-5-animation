import React, {useEffect} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
    },
  }));

function Component4(){
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

    return(

        <div className='d1'>
            <Container fixed>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <img className='c1' ref={ref} src={'http://azim.commonsupport.com/Appway/images/resource/subscribe-1.png'} alt='Image' />
                    </Grid>

                    <Grid data-aos='fade-up' item xs={12} sm={6}>
                        <h1>Subscribe our Newsletter.</h1>
                        <br /><br />
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo
                        </p>
                        <br /><br />
                        <input type='email' placeholder='Enter Email' className='inputtag' />
                        <br /><br />
                        <button className='btnbtn'>Subscribe Now</button>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Component4