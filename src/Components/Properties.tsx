import { Box, Container, styled, Typography } from "@mui/material";
import House from "./House";
import { visionStatements } from "../../Founder";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            sx={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#000339",
              my: 3,
            }}
          >
            Founding Members
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
              Leadership in Action: Introducing the Visionary Minds Guiding the
              Foundation
            </Typography>
          </CustomBox>
        </Box>

        <PropertiesBox gap={4}>
          {visionStatements.map((property) => (
            <House
              img={property.img}
              name={property.name}
              vision={property.vision}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
