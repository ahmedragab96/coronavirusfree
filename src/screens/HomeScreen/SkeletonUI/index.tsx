import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { Skeleton } from "@material-ui/lab";

const SkeletonUIHome: React.FC = () => {
  return (
    <Container>
      <Navbar expand="md" bg="white" className="py-5">
        <Navbar.Brand>
          <Skeleton variant="circle" width={40} height={40} animation="wave" />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Skeleton
            variant="rect"
            width={210}
            height={40}
            animation="wave"
            className="mr-3"
          />{" "}
          <Skeleton variant="rect" width={210} height={40} animation="wave" />{" "}
        </Nav>
      </Navbar>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Skeleton
            variant="rect"
            width={100}
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton variant="rect" width={150} height={10} animation="wave" />
          <Skeleton
            variant="rect"
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton
            variant="rect"
            height={40}
            animation="wave"
            className="my-2"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Skeleton
            variant="rect"
            width={100}
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton variant="rect" width={150} height={10} animation="wave" />
          <Skeleton
            variant="rect"
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton
            variant="rect"
            height={40}
            animation="wave"
            className="my-2"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Skeleton
            variant="rect"
            width={100}
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton variant="rect" width={150} height={10} animation="wave" />
          <Skeleton
            variant="rect"
            height={20}
            animation="wave"
            className="my-2"
          />
          <Skeleton
            variant="rect"
            height={40}
            animation="wave"
            className="my-2"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkeletonUIHome;
