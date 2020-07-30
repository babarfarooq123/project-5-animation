import React, {useEffect} from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

function Component2(){
    const classes = useStyles();

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return(
        <div className='d1'>
            <Container fixed>
                <Grid container>

                    <Grid className='c3' data-aos='fade-up' item xs={12} sm={6}>
                            <h1>Mobile Applications<br /> Redefined</h1>
                            <br /><br />
                            <p>
                                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                            <br /><br />
                            <button className='btnbtn'>Learn More</button>
                    </Grid>
                    <Grid item sm={6} className='div-bg'>
                        <Grid className='c4' container>
                            <Grid data-aos='fade-left' item xs={12} sm={3}>
                                <img className='c1' src={'http://azim.commonsupport.com/Appway/images/resource/dashbord-2.jpg'} alt='Image 1' />
                            </Grid>
                            <Grid data-aos='fade-left' item xs={12} sm={3}>
                                <img className='c1' src={'http://azim.commonsupport.com/Appway/images/resource/dashbord-1.jpg'} alt='Image 2' />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Component2