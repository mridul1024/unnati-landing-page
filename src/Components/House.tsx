import { Box, styled, keyframes, Typography } from "@mui/material";
import React from "react";
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const jiggleAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
`;

const House = ({ img, price, address, bedrooms, bathrooms, space }: any) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    // borderTopLeftRadius: "10px",
    // borderTopRightRadius: "10px",
    borderRadius: "12px",
    maxWidth: 350,
    margin: "0 auto",
    padding: theme.spacing(2),
    WebkitBoxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.1)",
    // boxShadow:
    //   "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    backgroundColor: "#fff",
    // border: "1px solid green",
    transition: "transform 0.3s ease-in-out",
    scale: 1,
    "&:hover": {
      transform: "scale(1.1)",
      // animation: "$jiggle 0.3s ease-in-out infinite",
      // animation: `${jiggleAnimation} 0.3s ease-in-out infinite`,
    },

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      {/* <ImgContainer>
        <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer> */}
      <Box
        style={{
          // maxWidth: "100%",
          width: "20em",
          // border: "2px solid red",
          // height: "100px",
          display: "flex",
          // justifyContent: "space-between",
          gap: "2em",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            height: "90px",
            width: "90px",
            border: "2px solid red",
            borderRadius: "50%",
          }}
        ></Box>
        <Typography variant="h5" sx={{ fontWeight: "700", fontSize: "25px" }}>
          Name
        </Typography>
      </Box>

      <Box sx={{ padding: "1rem", height: 300 }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          delectus? Distinctio hic repellendus est incidunt iusto quae mollitia
          dolor veniam dolorum, consequatur unde maxime ducimus laudantium.
          Architecto explicabo tenetur ad illum ullam et, enim vero deserunt
          modi nihil a odit?
        </Typography>
        {/* <Typography variant="body2" sx={{ fontWeight: "700" }}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {address}
        </Typography> */}

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <img src={bedroomsIcon} alt="bedroomsIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bedrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={bathroomsIcon} alt="bathroomssIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bathrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={spaceIcon} alt="spaceIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {space}
            </Typography>
          </InfoBox>
        </Box> */}
      </Box>
    </HouseBox>
  );
};

export default House;
