import { Typography, Container, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { achievementsdata } from "../data/Masterdata";

const Achievementdetail = () => {
  const { id } = useParams();
  const value = achievementsdata.find((achievement) => achievement.id == id);
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          textAlign={"center"}
          marginTop={10}
          fontWeight={"bold"}
          fontSize={30}
          marginBottom={5}
        >
          {value.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={value.imgURL}
            alt={value.title}
            style={{ width: "50%", marginBottom: "16px" }}
          />
        </Box>
        <Typography marginBottom={15}>{value.longdescription}</Typography>
      </Box>
    </Container>
  );
};

export default Achievementdetail;
