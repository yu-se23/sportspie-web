import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import '../css/Login.css';
export default function LoginContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
      <Box sx={{ height: '50px' }} />
        <Box sx={{ height: '600px', borderRadius: 5, boxShadow: 3 , display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <img className="logo_loginpage" src={require("../images/Sportify_Logo.png")}
          style={{width:"75px", height:"75px", margin:"20px 0"}}/>
            <div style={{display:"flex", flexDirection:"row", marginBottom:"10px"}}>
            <a style={{color:"#FF9300", fontSize: 16, fontWeight:"bolder"}}>SportyPie</a><a style={{fontSize: 16}}>를 이용하시려면</a><br/>
            </div>
            <a style={{fontSize: 16}}>로그인해 주세요.</a> 
            <Box sx={{ height: '130px' } } />
            <Container maxWidth="sm" sx={{textAlign:"center"}}>
            <a style={{color:"#7f7f7f", fontSize: 11}}>소셜 계정으로 로그인</a>
            <Box sx={{ height: '30px' }} />
            <Box sx={{ height: '30px'}}>
            <Grid container spacing={2} sx={{
              alignItems: 'center', display: 'flex', justifyContent: 'center'
            }}>
            
            <img className="logo_socialLogin" src={require("../images/naver_logo_img.png")} onClick={null}/>
            <img className="blank" src={require("../images/invisible.png")}/>
            <img className="logo_socialLogin" src={require("../images/kakao_logo_img.png")} onClick={null}/>
            <img className="blank" src={require("../images/invisible.png")}/>
            <img className="logo_socialLogin" src={require("../images/google_logo_img.png")} onClick={null}/>
            </Grid>   
            </Box>
            </Container>
            <Container maxWidth="sm" sx={{textAlign:"center"}}>
              <Box sx={{ height: '20px' }} />
              <Button sx={{ height: '45px', width: '300px', borderRadius: 1, boxShadow: 1 }} onClick={null}>
                <Box sx={{ height: '13px' }} />
                <a style={{color:"#585858", fontSize: 13, fontWeight: 600}}>다른 방법으로 로그인</a>
              </Button>
            </Container>
        </Box>
        <Box sx={{ height: '20px' }}/>
      </Container>
    </React.Fragment>
  );
}