// Packages
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import styled from "styled-components";
// Assets
import Assets from "../../assets";
import { Button, Typography, TextField } from "@material-ui/core";
import HowToReportModal from "components/HowToReportModal";

const NavBar: React.FC = () => {
  const Logo = styled.img`
    width: 88px;
  `;
  const LinkStyled = styled(Link)`
    color: black !important;
    &:hover {
      color: black !important;
      text-decoration: none;
    }
  `;
  const CustomButton = styled(Button)`
    background-color: #8adf92 !important;
    color: black;
    box-shadow: none !important;
    font-family: "FUTURABold" !important;
  `;

  return (
    <>
      <Navbar expand="md" bg="white" className="py-4">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo src={Assets.Images.logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" activeKey={"/post"}>
              <Nav.Link as={Link} to="/post" eventKey="/">
                <CustomButton variant="contained">{"Post a link"}</CustomButton>
              </Nav.Link>
              <Nav.Link>
                <HowToReportModal />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
