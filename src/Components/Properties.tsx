import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

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

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
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
        {/* <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Founding Members
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Leadership in Action: Introducing the Visionary Minds Guiding the
            Foundation
          </Typography>
        </PropertiesTextBox> */}

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
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              space={property.space}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
