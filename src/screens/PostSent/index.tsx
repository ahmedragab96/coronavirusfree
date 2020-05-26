// Packages
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
const CustomButton = styled.a`
  font-family: "FUTURABold" !important;
  display block;
  width: 25%;
  text-align: center;
  background-color: #8ADF92;
  margin: 0 auto;
  color: black;
  text-decoration: none;
  padding: 16px 64px;
  &:hover {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 40%;
  }
`;
const TryAgain = styled(Link)`
  font-family: "FUTURABold" !important;
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

const PostSent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />

      {location.state === "202" ? (
        <CustomContainer className="pt-5">
          <img
            draggable="false"
            alt="post deliveried"
            src={Assets.Images.staySafe}
            width="300"
          />
          <Title variant="h3">Thank you</Title>
          <Description variant="body1">
            select why you want report this link?
          </Description>
          <CustomButton target="_blank" href="https://momen.studio">
            Donate 5$
          </CustomButton>
        </CustomContainer>
      ) : (
        <CustomContainer className="pt-5">
          <img
            draggable="false"
            alt="post not deliveried"
            src={Assets.Images.staySafeRed}
            width="300"
          />
          <Title variant="h3">Something Wrong Happened</Title>
          <Description variant="body1">
            select why you want report this link?
          </Description>
          <TryAgain to="post" href="https://momen.studio">
            Try Again
          </TryAgain>
        </CustomContainer>
      )}
    </>
  );
};
export default PostSent;
