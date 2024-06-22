import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  ButtonBase,
} from "@mui/material";
import { achievementsdata } from "../data/Masterdata";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          textAlign={"center"}
          marginTop={10}
          fontWeight={"bold"}
          fontSize={30}
        >
          My Achievements
        </Typography>
        <Grid container spacing={2} marginTop={4}>
          {achievementsdata.map((value) => {
            return (
              <Grid item md={6} xs={12}>
                <ButtonBase
                  onClick={() => navigate("/achievements/" + value.id)}
                  style={{ width: "100%", display: "block" }}
                >
                  <Card>
                    <CardMedia sx={{ height: 140 }} image={value.imgURL} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Achievements;
