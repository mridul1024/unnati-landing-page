import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/hero_background.jpg";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img
              src={houseCard}
              alt="house"
              style={{ maxWidth: "100%", height: "20em", borderRadius: "30px" }}
            />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              Unlocking opportunities and nurturing dreams at Unnati Foundation
              and Trust.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              Step into the realm of Unnati Foundation and Trust, where
              education embraces purpose. Experience a journey of learning and
              growth in the field of nursing. We are dedicated to advancing
              education in rural areas, fostering innovation and research, and
              spreading awareness about vital healthcare services. Our vision
              includes providing hostel facilities, comprehensive training, and
              empowering both rural and urban communities. Join us in this
              transformative endeavor toward a brighter, healthier future.
            </Typography>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Details;
