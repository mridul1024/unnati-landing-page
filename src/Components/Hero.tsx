import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import HeroAnimation from "../animation/hero_animation_shooting_blob.json";

import CustomButton from "./CustomButton";
import Lottie from "lottie-react";

const Hero = () => {
  const Naveli = ["Home", "About", "Contact", "Events"];

  const navpath = ["/", "#about-us", "/contacts", "/events"];
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
    color: "#687690",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    opacity: 0,
    "@keyframes word": {
      "0%, 100%": {
        filter: "blur(0px)",
        color: "#687690",
        opacity: 1,
      },
      "20%, 80%": {
        filter: "blur(5px)",
        opacity: 0,
        color: "#687690",
      },
    },
  }));

  return (
    <Box
      sx={{
        // ...backgroundStyle,
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          // ...backgroundStyle, // Include background image styles here
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
        <Navbar Naveli={Naveli} navpath={navpath} />
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
                color: "#687690",
                // color: "white",
                fontWeight: "500",
                mt: 6,
                mb: 4,
              }}
            >
              Welcome to{" "}
              <span
                style={{
                  color: "#687690",
                  fontWeight: "bold",
                }}
              >
                Unnati Foundation,
              </span>
            </Typography>
            <Box
              className="morhping"
              sx={{
                flex: 1,
              }}
              // style={
              //   {
              //     // position: "relative",
              //     // marginTop: "0px",
              //     // filter: "contrast(05) ",
              //   }
              // }
            >
              <Title
                variant="h1"
                className="word"
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  mt: "55px",
                  animation: "word 9s infinite ease-in-out",
                  animationDelay: "0s",
                  flexWrap: "wrap",
                  // color: "#687690",
                }}
              >
                एक जुनून संभावनाओं का !
              </Title>
              <Title
                variant="h1"
                className="word"
                sx={{
                  position: "absolute",
                  mt: "65px",

                  animation: "word 9s infinite ease-in-out",
                  animationDelay: "3s",
                  flexWrap: "wrap",
                  textAlign: "center",

                  // color: "#687690",
                }}
              >
                সম্ভাবনাৰ এটি অনুৰাগ !
              </Title>
              <Title
                variant="h1"
                className="word"
                sx={{
                  mt: "55px",
                  textAlign: "center",

                  position: "absolute",
                  animation: "word 9s infinite ease-in-out",
                  animationDelay: "6s",
                  flexWrap: "wrap",
                }}
              >
                Passion for possibilities !
              </Title>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                opacity: 0.8,
                my: 4,
              }}
            >
              Fostering boundless opportunities and innovation for all.
            </Typography>
            <Box sx={{ height: "160px" }}></Box>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box
            sx={{
              flex: "1",
              ml: 30,
              display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            <Lottie loop={true} animationData={HeroAnimation} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
