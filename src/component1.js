import React, {useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useWebAnimations from "@wellyshen/use-web-animations";
import mobilelogo from './mobilelogo1.png';
import target from './targetlogo.png';
import box from './box.png';
import dashboard from './dashboard.png';
import { findByPlaceholderText } from '@testing-library/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    col:{
        color: 'black',
        padding: '6px 10px',
    },
    imsize:{
        width: '40px',
        height: '40px',
        padding: '6px 20px',
        paddingTop: '30px',
    },
    h22:{
        padding: '6px 10px',

    },
  }));

function Component1(){
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

       useEffect(()=>{
           Aos.init({duration: 2000});
       },[])

    return(
        <div>
            <Container fixed>
                <Grid container >
                    <Grid data-aos='fade-right' className='' item xs={12} sm={4}>
                        <img ref={ref} src='http://azim.commonsupport.com/Appway/images/resource/phone-3.png' alt='Mobile image' />
                    </Grid>

                    <Grid sm={8}>
                    <h1>Amazing Features.</h1>
                    <p className='graypara'>Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu.</p>
                    <br />
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Paper data-aos='fade-up' className='papershadow'>
                                <img className={classes.imsize} src={mobilelogo} alt='Mobile logo' />
                                <h2 className={classes.h22}>Unique Design</h2>
                                <p className={classes.col}>
                                Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero
                                </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper data-aos='fade-up' className='papershadow'>
                                <img className={classes.imsize} src={target} alt='Target logo' />
                                <h2 className={classes.h22}>Easy And New Project</h2>
                                <p className={classes.col}>
                                Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero
                                </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper data-aos='fade-up' className='papershadow'>
                                <img className={classes.imsize} src={box} alt='Target logo' />
                                <h2 className={classes.h22}>Track Anything</h2>
                                <p className={classes.col}>
                                Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero
                                </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper data-aos='fade-up' className='papershadow'>
                                <img className={classes.imsize} src={dashboard} alt='Target logo' />
                                <h2 className={classes.h22}>Unlimited Dashboard</h2>
                                <p className={classes.col}>
                                Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero
                                </p>
                            </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Component1;