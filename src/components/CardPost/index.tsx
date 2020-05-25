import React from "react";
import { Grid } from "@material-ui/core";
import CardHeaderComponent from "./CardHeader";
import CardActionsComponent from "./CardActions";
import CardBodyComponent from "./CardBody";

interface Props {
  type: string;
  author: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const CardPost: React.FC<Props> = (props: Props) => {
  return (
    <Grid item md={4} xs={12}>
      <CardHeaderComponent type={props.type} />
      <CardActionsComponent date={props.date} author={props.author} />
      <CardBodyComponent
        link={props.link}
        title={props.title}
        description={props.description}
      />
    </Grid>
  );
};

export default CardPost;
