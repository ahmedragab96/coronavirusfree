// Packages
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
// Assets
import Assets from "../../assets";
import { Button } from "@material-ui/core";
import HowToReportModal from "components/HowToReportModal";

const Logo = styled.img`
  width: 88px;
`;

const CustomButton = styled(Button)`
  background-color: #8adf92 !important;
  color: black;
  box-shadow: none !important;
  font-family: "FUTURABold" !important;
`;

const NavBar: React.FC = () => {
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
