import { Email, Facebook, Instagram, Phone, X } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
 const Footer = () => {
    return (
    <Box component={'footer'} sx={{mt:'auto'}} bgcolor={'#58363B'} paddingTop={5} paddingBottom={10}>
        <Grid container spacing={5}>
            <Grid item md={4}>
                <Typography color={'#FFFFFF'} fontSize={35} fontWeight={'bold'} display={'flex'} flexDirection={'column'} alignItems={'end'} justifyContent={'center'} height={'100%'}> Contact me! </Typography>
            </Grid>
            <Grid item md={0.5}>
                <Divider orientation="vertical" sx={{width:'10', borderColor:'#FFFFFF'}} variant="middle"/>
            </Grid>
            <Grid item md={7.5}>
                <Box>
                    <IconButton>
                        <Email htmlColor="#FFFFFF"/>
                        <Typography color={'#FFFFFF'} marginLeft={3}> Pinn Email </Typography>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <Phone htmlColor="#FFFFFF"/>
                        <Typography color={'#FFFFFF'} marginLeft={3}> Pinn Phone </Typography>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <Facebook htmlColor="#FFFFFF"/>
                        <Typography color={'#FFFFFF'} marginLeft={3}> Pinn Facebook </Typography>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <Instagram htmlColor="#FFFFFF"/>
                        <Typography color={'#FFFFFF'} marginLeft={3}> Pinn Instagram </Typography>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <X htmlColor="#FFFFFF"/>
                        <Typography color={'#FFFFFF'} marginLeft={3}> Pinn Twitter </Typography>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
 }

 export default Footer