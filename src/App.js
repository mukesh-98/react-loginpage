import React from 'react';
import {makeStyles, MenuItem, Select} from '@material-ui/core';
import { Box , Button, TextField, Typography  } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '100%',
        background: 'linear-gradient(90deg, #ECF0F4 50%, #4424A7 50%)',
        minHeight: '100vh',
        overflow: 'hidden',
        display:'flex'
    },
    left:{
        height:'auto',
        maxWidth:'50%',
        width:'100%',
        float:'left',
        padding:'40px 110px',
        backgroundColor:'#ECF0F4',
        [theme.breakpoints.down('sm')]:{
            maxWidth:'100%',
            padding:'40px 35px',
            backgroundSize: 'cover',
            backgroundImage:'url(assets/bgr.svg)',
            backgroundBlendMode: 'overlay',
            backgroundColor:'#4424A7',
        }
    },
    textHeader:{
        width:'100%',
        margin:'50px 0'
    },
    logo:{
        height:70,
        width:70,
        objectFit:'contain'
    },
    textTitle:{
        fontFamily: 'Alegreya',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 32,
        color: '#19212C',
        [theme.breakpoints.down('sm')]:{
            color:'white'
        }
    },
    textSubTitle:{
        marginTop:12,
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#868B90',
        [theme.breakpoints.down('sm')]:{
            color:'white'
        }
    },
    form:{
        width:'100%',
        backgroundColor:'white',
        borderRadius: 24,
        padding:'60px 50px',
        [theme.breakpoints.down('sm')]:{
            padding:'30px 25px',
        },
        '& > .MuiTypography-root.MuiTypography-body1':{
            marginBottom:12,
            fontFamily: 'Abel',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            color: '#868B90',
        },
        '& > .MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth':{
            marginBottom:20,
        },
        '& > .MuiButtonBase-root.MuiButton-root.MuiButton-text':{
            marginTop:20,
            color:'white',
            width:'100%',
            padding:'15px 0',
            backgroundColor: '#77C5FD',
            borderRadius: 12,
        }
    },
    right:{
        height:'auto',
        maxWidth:'50%',
        width:'100%',
        float:'left',
        display:'block',
        backgroundSize: 'cover',
        backgroundImage:'url(assets/bgr.svg)',
        backgroundBlendMode: 'overlay',
        backgroundColor:'#4424A7',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },

}))

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.left}>
          <Box className='d-flex justify-content-center align-items-center flex-column h-100'>
              <Box className={classes.logo}>
                  <img src="assets/logo.svg" alt="logo"/>
              </Box>
              <Box className={classes.textHeader}>
                  <Box className={classes.textTitle}>
                      Log In and <u style={{textDecorationColor:'#E2D9FF', height:8}}>Build your store !</u>
                  </Box>
                  <Box className={classes.textSubTitle}>
                      We provide you  the platform  that will help you to create  your store and <br/>
                      make your business online.
                  </Box>
              </Box>
              <form className={classes.form}>
                  <Typography>Username</Typography>
                  <TextField
                      variant={'outlined'}
                      fullWidth
                      nane='username'
                  />
                  <Typography>Password</Typography>
                  <TextField
                      variant={'outlined'}
                      fullWidth
                      nane='username'
                  />
                  <Typography>Account Type</Typography>
                  <Select
                      variant={'outlined'}
                      fullWidth
                      name={'accountType'}
                  >
                      <MenuItem value={2}>Merchant</MenuItem>
                      <MenuItem value={3}>Seller</MenuItem>
                  </Select>
                  <Button>Log In</Button>
              </form>
          </Box>
      </Box>
      <Box className={classes.right}>

          <Box className='d-flex justify-content-center align-items-center h-100'>
              <OwlCarousel autoplay={true} items={1} dots={true} className='owl-theme px-5'  loop margin={10}  >
                  <Box className={'item d-flex justify-content-center w-100 float-left'}>
                      <img src="assets/services.svg" style={{height:500 , width:500 , objectFit:'contain'}} alt="services"/>
                  </Box>
                  <Box className={'item d-flex justify-content-center w-100 float-left'}>
                      <img src="assets/support.svg" alt="support" style={{height:500 , width:500 , objectFit:'contain'}}/>
                  </Box>
                  <Box className={'item d-flex justify-content-center w-100 float-left'}>
                      <img src="assets/feature.svg" alt="feature" style={{height:500 , width:500 , objectFit:'contain'}}/>
                  </Box>
              </OwlCarousel>
          </Box>

      </Box>
    </Box>
  );
}

export default App;
