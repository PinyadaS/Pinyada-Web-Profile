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
import React, { useState } from "react";
import { portfoliodata } from "../data/Masterdata";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          textAlign={"center"}
          marginTop={10}
          fontWeight={"bold"}
          fontSize={30}
        >
          My Portfolio
        </Typography>
        <Grid container spacing={2} marginTop={4}>
          {portfoliodata.map((value) => {
            return (
              <Grid item md={4} xs={12}>
                <ButtonBase
                  onClick={() => handleCardClick(value)}
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
        {selectedCard && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <img
                src={selectedCard.imgURL}
                alt={selectedCard.title}
                style={{ width: "100%", marginBottom: "16px" }}
              />
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedCard.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedCard.longdescription}
              </Typography>
            </Box>
          </Modal>
        )}
      </Box>
    </Container>
  );
};

export default Portfolio;
