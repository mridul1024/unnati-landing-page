import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import HeroAnimation from "../animation/hero_animation_shooting_blob.json";
import { useNavigate } from "react-router-dom";

import CustomButton from "./CustomButton";
import Lottie from "lottie-react";

const EventsPage = () => {
  const Naveli = ["Home"];

  const navpath = ["/"];
  const navigate = useNavigate();
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
              {/* Welcome to{" "} */}
              <span
                style={{
                  color: "#687690",
                  fontWeight: "bold",
                }}
              >
                Oops...there are no events at the moment!
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                opacity: 0.8,
                my: 4,
              }}
            >
              Click the button below to get redirected...
            </Typography>
            <Box sx={{ height: "160px" }}></Box>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Redirect to Home"
              onClick={() => navigate("/")}
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

export default EventsPage;
