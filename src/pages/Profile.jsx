import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <div style={{ marginBottom: 75 }}>
      <Grid
        container
        display={"flex"}
        sx={{ backgroundColor: "#F7D0D3" }}
        height={"auto"}
      >
        <Grid item md={5} xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <img
              src="./profile.jpeg"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                margin: "15px",
                borderRadius: "20px",
              }}
              width={"50%"}
            />
          </Box>
        </Grid>
        <Grid item md={7} xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            height={"100%"}
            flexDirection={"column"}
            marginX={2}
            marginBottom={4}
          >
            <Typography> Hi, my name is </Typography>
            <Typography
              variant="h1"
              fontWeight={500}
              fontSize={45}
              sx={{ fontFamily: "Source+Sans+3" }}
            >
              {" "}
              Pinyada Sanguansinthukul!{" "}
            </Typography>
            <Typography>
              {" "}
              I am a diligent and inquisitive student from Thailand. I
              specialize in mathematics and computer science, and am passionate
              about music and swimming. I look forward to connecting with you
              all!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          marginTop={8}
          fontSize={27}
          fontWeight={"bold"}
          marginBottom={5}
        >
          Soft Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Box
              bgcolor={"#FEE8DD"}
              padding={5}
              borderRadius={6}
              height={210}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography textAlign="center" fontWeight={"bold"}>
                {" "}
                Problem Solving{" "}
              </Typography>
              <Typography textAlign="center">
                {" "}
                Analytical thinking, creativity, and innovation in addressing
                challenges.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              bgcolor={"#FEE8DD"}
              padding={5}
              borderRadius={6}
              height={210}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography textAlign="center" fontWeight={"bold"}>
                {" "}
                Critical Thinking{" "}
              </Typography>
              <Typography textAlign="center">
                {" "}
                Evaluation, reasoning, and the ability to make well-informed
                decisions.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              bgcolor={"#FEE8DD"}
              padding={5}
              borderRadius={6}
              height={210}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography textAlign="center" fontWeight={"bold"}>
                {" "}
                Adaptability{" "}
              </Typography>
              <Typography textAlign="center">
                {" "}
                Flexibility, open-mindedness, and the ability to manage change.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              bgcolor={"#FEE8DD"}
              padding={5}
              borderRadius={6}
              height={210}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography textAlign="center" fontWeight={"bold"}>
                {" "}
                Time Management{" "}
              </Typography>
              <Typography textAlign="center">
                {" "}
                Prioritization, organization, and the ability to manage time
                effectively.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
