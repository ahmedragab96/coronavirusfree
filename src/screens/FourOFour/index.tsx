// Packages
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// Components
import NavBar from "components/NavBar";
// Assets
import Assets from "../../assets/index";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Title = styled(Typography)`
  font-family: "FUTURABook" !important;
  margin-top: 8px !important;
`;
const Description = styled(Typography)`
  font-family: "FUTURALight" !important;
  width: 60%;
  text-align: center;
  margin: 16px auto !important;
`;
const CustomButton = styled(Link)`
  font-family: "FUTURABook" !important;
  display block;
  width: 25%;
  text-align: center;
  background-color: black;
  margin: 0 auto;
  color: white;
  text-decoration: none;
  padding: 16px 64px;
  &:hover {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 40%;
  }
`;

const CustomContainer = styled(Container)`
  justify-content: center !important;
  text-align: center;
`;
const FourOFour: React.FC = () => {
  return (
    <>
      <NavBar />
      <CustomContainer>
        <img src={Assets.Images.staySafe} width="300" />
        <Title variant="h3">Oops .. Stay Safe at home</Title>
        <Description variant="body1">
          select why you want report this link?
        </Description>
        <CustomButton to="/">BACK TO HOME</CustomButton>
      </CustomContainer>
    </>
  );
};
export default FourOFour;
