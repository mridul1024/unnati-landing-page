import { Box, styled, Typography } from "@mui/material";

import edu from "../assets/img/undraw-edu.svg";
import deve from "../assets/img/deve.svg";
import gar from "../assets/img/gar.svg";

import SouthIcon from "@mui/icons-material/South";
import CustomButton from "./CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          height: "5rem",
          mt: 4,
          mb: 10,
          "@keyframes arrow": {
            "0%": {
              opacity: 1,
            },
            "50%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      >
        <SouthIcon
          sx={{
            fontSize: "4rem",
            animation: "arrow 2s infinite ease-in-out",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // mt: "14em",
        }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",

            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        ></div>
        <Typography
          variant="h3"
          sx={{ fontSize: "30px", fontWeight: "bold", color: "#000339", my: 3 }}
        >
          What we aim to achieve ?
        </Typography>

        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign: "center",
            }}
          >
            Empowering through nursing education, rural education advancement,
            and healthcare awareness, fostering growth and well-being in
            communities, both urban and rural.
          </Typography>
        </CustomBox>

        <GuidesBox>
          <GuideBox>
            <img
              src={edu}
              style={{
                height: "90px",
              }}
              alt="buyIcon"
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Nursing Education and Training:
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </GuideBox>

          <GuideBox>
            <img
              src={gar}
              style={{
                height: "90px",
              }}
              alt=" Development and Awareness"
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Community Development and Awareness:
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </GuideBox>

          <GuideBox>
            <img
              src={deve}
              alt="buyIcon"
              style={{
                height: "90px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Rural Education Promotion:
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </GuideBox>
        </GuidesBox>

        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="See Full Guides"
          guideBtn={true}
        />
      </Box>
    </>
  );
};

export default Guide;
