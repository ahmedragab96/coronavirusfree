import React, { useState } from "react";
import NavBar from "components/NavBar";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Typography, Button, MenuItem } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import * as emailjs from "emailjs-com";

const Title = styled(Typography)`
  font-family: "FUTURABook" !important;
`;
const Description = styled(Typography)`
  font-family: "FUTURALight" !important;
  width: 60%;
`;
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#757575",
        borderRadius: 0,
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#757575",
      },
    },
  },
})(TextField);
const CustomButton = withStyles({
  root: {
    boxShadow: "none",
    fontSize: 18,
    padding: "12px 24px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "white",
    backgroundColor: "#000",
    borderColor: "#000",
    textTransform: "uppercase",
    borderRadius: 0,
    marginTop: 15,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#000",
      borderColor: "#000",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "green",
      borderColor: "green",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
interface IFormValues {
  firstName: string;
  email: string;
  message: string;
}

const PostALink: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div>
      <NavBar />
      <Container>
        <Title variant="h1">POST A LINK</Title>
        <Description variant="body1">
          I have worked in the Design Industry for the past 12 years. Currently,
          I’m working as Senior Product Designer at N26 creating a flexible and
          simple experience and shaping a product for more than 4 million users.
        </Description>
        <Formik
          initialValues={{ firstName: "", email: "", message: "" }}
          onSubmit={(
            values: IFormValues,
            actions: FormikHelpers<IFormValues>
          ) => {
            actions.setSubmitting(true);
            setTimeout(() => {
              emailjs
                .send(
                  "gmail", // Email service as defined in EmailJS setting
                  "template_fQRMbBug", // Email template ID provided by EmailJS
                  {
                    from_name: values.firstName,
                    to_name: "momenheshamzaza@gmail.com",
                    reply_to: values.email,
                    message_html: values.message,
                  },
                  "user_PTCm89pSOkpRGXWRjnRuB" // EmailJS user ID
                )
                .then(() => {
                  setEmailSent(true);
                  actions.setSubmitting(false);
                  actions.resetForm();
                })
                .catch(() => {
                  actions.setSubmitting(false);
                  alert("Error sending email...");
                });
            }, 1000);
          }}
          render={(formikBag) => (
            <Form style={{ width: "100%" }}>
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="firstName"
                type="email"
                label="Name"
              />
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="email"
                type="email"
                label="Email"
              />
              <Field
                name="category"
                component={CssTextField}
                type="text"
                placeholder="Category"
                required={true}
                select={true}
                fullWidth={true}
                variant="outlined"
              >
                <MenuItem value="">Please go and typefaces first!</MenuItem>

                <MenuItem key="noitems" value="noitems" disabled={true}>
                  Please go and typefaces first!
                </MenuItem>
              </Field>
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="message"
                type="textarea"
                label="message"
              />
              <CustomButton variant="contained" fullWidth={true} type="submit">
                send
              </CustomButton>
            </Form>
          )}
        />
      </Container>
    </div>
  );
};
export default PostALink;
