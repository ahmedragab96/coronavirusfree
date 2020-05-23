// Packages
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router";
// Assets
import Assets from "../../assets";
import { Button } from "@material-ui/core";
import ReportModal from "components/ReportModal";
const NavBar: React.FC = (props) => {
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
  let location = useLocation();
  const CustomButton = styled(Button)`
    background-color: #8adf92 !important;
    color: black;
    box-shadow: none !important;
    font-family: "FUTURABold" !important;
  `;
  return (
    <Navbar expand="md" fixed="top" bg="white" className="py-5">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo src={Assets.Images.logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" activeKey={"/post"}>
            <Nav.Link
              as={Link}
              to="/post"
              eventKey="/"
              active={location.pathname === "/post"}
            >
              <CustomButton variant="contained">{"Post a link"}</CustomButton>
            </Nav.Link>
            <Nav.Link>
              <ReportModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
