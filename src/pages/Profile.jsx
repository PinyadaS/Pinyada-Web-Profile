import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
    return (
        <div>
            <Grid container display={'flex'} sx={{backgroundColor:'#F7D0D3'}} height={'auto'}>
                <Grid item md={5} xs={12}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
                        <img src="./unicorn.jpg" style={{objectFit:'contain', objectPosition:'center', margin:'15px', borderRadius:'20px'}} width={'50%'}/>
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Box display={'flex'} justifyContent={'center'} height={'100%'} flexDirection={'column'}>
                        <Typography> Hi, my name is </Typography>
                        <Typography variant="h1" fontWeight={500} fontSize={45} sx={{fontFamily: 'Source+Sans+3'}}> Pinyada Sanguansinthukul! </Typography>
                        <Typography> I am a diligent and inquisitive student from Thailand. I specialize in mathematics and computer science, and am passionate about music and swimming. I look forward to connecting with you all!"</Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* <Container maxWidth='lg'>
                <Typography textAlign='center' marginTop='30px'>Welcome!</Typography>
            </Container> */}
        </div>
    )
}

export default Profile