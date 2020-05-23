import * as React from "react";
import classes from "./styles.module.scss";
import { inject, observer } from "mobx-react";
import NavBar from "components/NavBar";
import CardPost from "components/CardPost";
import Grid from "@material-ui/core/Grid";
import { Container } from "react-bootstrap";

const HomeScreen: React.FC = observer(() => {
  return (
    <div>
      <NavBar />
      <Container>
        <Grid container spacing={3}>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </Grid>
      </Container>
    </div>
  );
});
export default HomeScreen;
