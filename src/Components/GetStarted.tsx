import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";
import emailjs from "@emailjs/browser";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Get in touch with us!
          </Typography>
          <Stack gap={1} direction={"column"} my={1} mb={3}>
            <TextField
              fullWidth
              // label="fullWidth"
              sx={{
                background: "white",
                borderRadius: "12px",
                "& fieldset": { border: "none" },
                // my: 1,
              }}
              multiline
              placeholder="Email"
              id="fullWidth"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              // label="fullWidth"
              sx={{
                background: "white",
                borderRadius: "12px",
                "& fieldset": { border: "none" },
                // my: 1,
              }}
              multiline
              placeholder="Write your message here"
              id="fullWidth"
              InputLabelProps={{ shrink: true }}
            />
          </Stack>

          {/*           
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about houses!
          </Typography> */}

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Send Email"
            onClick={async () => {
              console.log("clicked", { emailjs });
              var templateParams = {
                to_name: "Hehe",
                from_name: "huihui",
                message: "khekhe",
              };

              await emailjs.init("8j6wIKXsktFNg8t79");

              emailjs
                .send("service_68gs3f9", "template_2ecgibu", templateParams)
                .then(
                  function (response: any) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error: any) {
                    console.log("FAILED...", error);
                  }
                );
            }}
            getStartedBtn={true}
          />
        </Box>

        <Box
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            m: { sx: 4 },
          }}
        >
          <img
            src={homeIllustration}
            alt="illustration"
            style={{ maxWidth: "100%" }}
          />
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
