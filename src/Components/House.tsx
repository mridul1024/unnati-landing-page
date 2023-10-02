import { Box, styled, Typography, Divider } from "@mui/material";

interface IProps {
  img: string;
  name: string;
  vision: string;
}
const getRandomLightColor = () => {
  const randomIndex = Math.floor(Math.random() * lightColors.length);
  return lightColors[randomIndex];
};
const lightColors = ["rgb(200, 200, 255)"];

const House = ({ img, vision, name }: IProps) => {
  const randomBoxShadowColor = getRandomLightColor();
  const HouseBox = styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: "12px",
    maxWidth: 350,
    margin: "0 auto",
    padding: theme.spacing(2),
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

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
      zIndex: -1,
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      <Box
        style={{
          width: "20em",
          display: "flex",
          justifyContent: "center",
          gap: "2em",
          alignItems: "center",
          padding: "10px",
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
              style={{ width: "6em", height: "6em", borderRadius: "50%" }}
            />
          </ImgContainer>
        </Box>
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

      <Box sx={{ padding: "1rem", height: 300 }}>
        <Typography>{vision}</Typography>
      </Box>
    </HouseBox>
  );
};

export default House;
