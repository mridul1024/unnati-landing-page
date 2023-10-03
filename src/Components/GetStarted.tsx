import { useState, useRef } from "react";
import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomButton from "./CustomButton";
// import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import homeIllustration from "../media/illustration.png";
import * as yup from "yup";

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

const GetStarted = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("Form values", { formData });
    // console.log("clicked", { emailjs });
    var templateParams = {
      to_name: "Rumi",
      from_name: formData.email,
      message: formData.message,
    };

    let messageSchema = yup.object({
      to_name: yup.string().required(),
      from_name: yup
        .string()
        .email("Email must be valid!")
        .required("Email is required!"),
      message: yup.string().required("Message is required!"),
    });

    const validationCheck = await messageSchema.validate(templateParams);

    if (validationCheck) {
      await emailjs.init("8j6wIKXsktFNg8t79");

      emailjs.send("service_68gs3f9", "template_2ecgibu", templateParams).then(
        function (response: any) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error: any) {
          console.log("FAILED...", error);
        }
      );
    }
  };

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <div id="contact-us"></div>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Get in touch with us!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack gap={1} direction={"column"} my={1} mb={3}>
              <TextField
                fullWidth
                name="email"
                sx={{
                  background: "white",
                  borderRadius: "6px",
                  "& fieldset": { border: "none" },
                }}
                onChange={handleInputChange}
                value={formData.email}
                placeholder="Email"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                name="message"
                onChange={handleInputChange}
                value={formData.message}
                sx={{
                  background: "white",
                  color: "black",
                  borderRadius: "6px",
                  "& fieldset": { border: "none" },
                }}
                multiline
                placeholder="Write your message here"
                InputLabelProps={{ shrink: true }}
              />
              <Button
                style={{
                  marginTop: 8,
                  background: "white",
                  color: "black",
                  height: "50px",
                  borderRadius: "8px",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Stack>
          </form>
          {/* <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Send Email"
            onClick={async () => {
              console.log("clicked", { emailjs });
              var templateParams = {
                to_name: "Rumi",
                from_name: formData.email,
                message: formData.message,
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
          /> */}
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
