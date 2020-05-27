import React from "react";
import NavBar from "components/NavBar";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Typography, Button, MenuItem } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useHistory } from "react-router";
import { TextField } from "formik-material-ui";

import RootStore from "stores";
import { Post } from "stores/postsStore";

const { postsStore } = RootStore.Stores;

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

interface Category {
  value: string;
  name: string;
}

const categories: Category[] = [
  {
    value: "Course",
    name: "Course",
  },
  {
    value: "Video",
    name: "Video",
  },
  {
    value: "Article",
    name: "Article",
  },
];
interface IFormValues {
  author: string;
  link: string;
  type: string;
  expiryDate: Date;
  title: string;
  description: string;
}

const PostALink: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <Container>
        <Title variant="h1">POST A LINK</Title>
        <Description variant="body1">
          People need each other the most in times like this, let's
          spread the knowledge , share useful links and help each other
          to get the best out of our free time.
        </Description>
        <Formik
          initialValues={{
            author: "",
            link: "",
            type: "Course",
            expiryDate: new Date(),
            description: "",
            title: "",
          }}
          onSubmit={async (
            values: IFormValues,
            actions: FormikHelpers<IFormValues>
          ) => {
            // actions.setSubmitting(true);
            const newPost: Post = {
              ...values,
              expiryDate: new Date(values.expiryDate).getTime(),
              date: new Date().getTime(),
              verified: false,
              reported: false,
            };
            await postsStore.addPost(newPost);
            history.push({
              pathname: "/sent",
              state: "202",
            });
          }}
          render={(formikBag) => (
            <Form style={{ width: "100%", marginBottom: "40px"}}>
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="author"
                label="Author Name"
                key="author"
              />
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="link"
                label="Link"
                required
                key="url"
              />
              <Field
                name="type"
                component={CssTextField}
                required
                select
                fullWidth={true}
                variant="outlined"
                key="type"
              >
                {categories.map((category: Category) => {
                  return (
                    <MenuItem value={category.value} key={category.value}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Field>
              <Field
                id="date"
                label="Expiry Date"
                margin="normal"
                variant="outlined"
                name="expiryDate"
                type="date"
                fullWidth={true}
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                component={CssTextField}
                key="expiryDate"
              />
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="title"
                label="Link Title"
                required
                key="title"
              />
              <Field
                component={CssTextField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                name="description"
                placeholder="Link Description ..."
                rows="8"
                multiline={true}
                size="medium"
                required
                key="description"
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
