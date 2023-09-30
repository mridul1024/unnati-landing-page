import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import HeroAnimation from "../animation/hero_animation.json";

import heroImg from "../media/hero_illustration_girls.png";
import backgroundImage from "../media/hero_background_dark.jpeg";
import CustomButton from "./CustomButton";
import Lottie from "lottie-react";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    opacity: 0,
    "@keyframes word": {
      "0%, 100%": {
        filter: "blur(0px)",
        opacity: 1,
      },
      "20%, 80%": {
        filter: "blur(1em)",
        opacity: 0,
      },
    },
  }));

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backdropFilter: "blur(10px)",
    filter: "blur(5px)",
  };

  return (
    <Box
      sx={{
        // ...backgroundStyle,
        // backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          ...backgroundStyle, // Include background image styles here
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "blur(10px)", // Adjust the blur amount as needed
          zIndex: -1, // Place it behind other content
        }}
      ></div>
      <Container>
        <Navbar />
        <CustomBox>
          <Box
            sx={{
              flex: "1",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "34px",
                // color: "#687690",
                color: "white",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to{" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Unnati Foundation,
              </span>
            </Typography>
            <div
              className="morhping"
              style={{
                // position: "relative",
                // marginTop: "0px",
                filter: "contrast(25) ",
              }}
            >
              <Title
                variant="h1"
                className="word"
                sx={{
                  position: "absolute",
                  mt: "55px",
                  animation: "word 22s infinite ease-in-out",
                  animationDelay: "0s",
                  color: "white",
                }}
              >
                एक जुनून संभावनाओं का!
              </Title>
              <Title
                variant="h1"
                className="word"
                sx={{
                  position: "absolute",
                  mt: "65px",

                  animation: "word 22s infinite ease-in-out",
                  animationDelay: "6s",
                  color: "white",
                }}
              >
                এটি অনুৰাগ সম্ভাবনাৰ
              </Title>
              <Title
                variant="h1"
                className="word"
                sx={{
                  mt: "55px",

                  position: "absolute",
                  animation: "word 22s infinite ease-in-out",
                  animationDelay: "12s",
                  color: "white",
                }}
              >
                Passion for possibilities.
              </Title>
            </div>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                // color: "#5A6473",
                color: "white",
                opacity: 0.8,
                my: 4,
              }}
            >
              where passion fuels possibilities for women to soar.
            </Typography>
            <Box sx={{ height: "180px" }}></Box>
            <CustomButton
              // backgroundColor="#0F1B4C"
              // color="#fff"
              backgroundColor="white"
              color="black"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.1", mt: 15 }}>
            {/* <Lottie loop={true} animationData={HeroAnimation} /> */}
            {/* <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            /> */}
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
