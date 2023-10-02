import { Box, styled, keyframes, Typography, Divider } from "@mui/material";
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
interface IProps {
  img: string;
  name: string;
  vision: string;
}
const getRandomLightColor = () => {
  const randomIndex = Math.floor(Math.random() * lightColors.length);
  return lightColors[randomIndex];
};
const lightColors = [
  // "rgb(255, 200, 200)", // Light red
  // "rgb(200, 255, 200)", // Light green
  "rgb(200, 200, 255)", // Light blue
];

const House = ({ img, vision, name }: IProps) => {
  const randomBoxShadowColor = getRandomLightColor();
  const HouseBox = styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: "12px",
    maxWidth: 350,
    margin: "0 auto",
    padding: theme.spacing(2),
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

    // border: "1px solid green",
    height: "26em",

    transition: "all 0.3s ease-in-out",
    scale: 1,
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: ` -10px 8px 15px ${randomBoxShadowColor},
    2px 8px 18px ${randomBoxShadowColor}`,
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },

    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "12px",
      // backgroundColor: "rgba(144, 238, 144, 0.5)",
      zIndex: -1,
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
      <Box
        style={{
          // maxWidth: "100%",
          width: "20em",
          // border: "2px solid red",
          // height: "100px",
          display: "flex",
          justifyContent: "center",
          // justifyContent: "space-between",
          // borderBottom: "2px solid blue",
          gap: "2em",
          alignItems: "center",
          padding: "10px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            height: "100px",
            width: "100px",
          }}
        >
          <ImgContainer>
            <img
              src={img}
              alt="housePhoto"
              style={{ maxWidth: "100%", borderRadius: "50%" }}
            />
          </ImgContainer>
        </Box>

        {/* <Typography variant="h5" sx={{ fontWeight: "700", fontSize: "20px" }}>
          {name}
        </Typography> */}
      </Box>
      <Box sx={{ mt: 2 }}>
        <Divider
          variant="middle"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}
        >
          {name}
        </Divider>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Divider
          sx={{
            bgcolor: "grey",
            height: "2px",
            width: "70%",
            alignSelf: "center",
          }}
        />
      </Box> */}

      <Box sx={{ padding: "1rem", height: 300 }}>
        <Typography>{vision}</Typography>
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
