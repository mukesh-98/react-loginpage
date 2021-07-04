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
        padding:'0px 110px',
        backgroundColor:'#ECF0F4',
        [theme.breakpoints.down('lg')]:{
            padding:'0 110px',
        },
        [theme.breakpoints.down('md')]:{
            padding:'0 35px',
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth:'100%',
            padding:'0 30px',
            backgroundSize: 'cover',
            backgroundImage:'url(assets/bgr.svg)',
            backgroundBlendMode: 'overlay',
            backgroundColor:'#4424A7',
        },

    },
    boxContent:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      flexDirection:'column',
      width:'100%',
    },
    textHeader:{
        maxWidth:500,
        width:'100%',
        margin:'50px 0',
        [theme.breakpoints.down('lg')]:{
            margin:'40px 0',
        },
    },
    logo:{
        height:70,
        width:70,
        objectFit:'contain'
    },
    textTitle:{
        maxWidth:500,
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
        maxWidth:500,
        marginTop:12,
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#868B90',
        [theme.breakpoints.down('sm')]:{
            color:'white',
            marginTop:6,
        }
    },
    form:{
        maxWidth:500,
        width:'100%',
        backgroundColor:'white',
        borderRadius: 24,
        padding:'60px 50px',
        [theme.breakpoints.down('lg')]:{
            padding:'40px 50px',
        },
        [theme.breakpoints.down('md')]:{
            padding:'20px 50px',
        },
        [theme.breakpoints.down('sm')]:{
            padding:'30px 50px',
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
    carouselImage:{
        height:500 ,
        width:500 ,
        objectFit:'contain',
        [theme.breakpoints.down('lg')]:{
            height:300 ,
            width:300 ,
        },
    },
    carouselHeading:{
        textAlign:'center',
        color:'white',
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24
    },
    carouselSubHeading:{
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 200,
        fontSize: 20,
        textAlign:'center',
        color:'#B7A9E3'
    }

}))

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.left}>
          <Box className={classes.boxContent}>
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
                  <Box className={'item d-flex justify-content-center flex-column w-100 float-left'}>
                      <img src="assets/services.svg" className={classes.carouselImage} alt="services"/>
                      <Typography className={classes.carouselHeading}>Service</Typography>
                      <Typography className={classes.carouselSubHeading}>We provide services, which will help to grow your business</Typography>
                  </Box>
                  <Box className={'item d-flex justify-content-center flex-column w-100 float-left'}>
                      <img src="assets/support.svg"  className={classes.carouselImage} alt="support" />
                      <Typography className={classes.carouselHeading}>Support</Typography>
                      <Typography className={classes.carouselSubHeading}>We provide Support, 24/7 to solve your problems</Typography>
                  </Box>
                  <Box className={'item d-flex justify-content-center flex-column w-100 float-left'}>
                      <img src="assets/feature.svg" alt="feature" className={classes.carouselImage}/>
                      <Typography className={classes.carouselHeading}>Feature</Typography>
                      <Typography className={classes.carouselSubHeading}>We provide Features, which will help to grab your customer to the shop</Typography>
                  </Box>
              </OwlCarousel>
          </Box>

      </Box>
    </Box>
  );
}

export default App;
