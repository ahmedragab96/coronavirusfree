import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

interface Props {
  title: string;
  description: string;
  link: string;
}

const CardBody = styled.div``;
const LinkTitle = styled(Typography)`
  font-family: "Freight" !important;
`;

const Description = styled(Typography)`
  color: #353535;
  font-family: "FUTURALight" !important;
`;
const CustomLink = styled.a`
  color: #000 !important;
  text-decoration: none;
  transition: 1s;
  &:hover {
    text-decoration: underline;
  }
`;

const CardBodyComponent: React.FC<Props> = (props: Props) => {
  return (
    <CardBody>
      <LinkTitle variant="h6" className="my-1">
        <CustomLink href={props.link} target="_blank">
          {props.title}
        </CustomLink>
      </LinkTitle>
      <Description variant="body1">{props.description}</Description>
    </CardBody>
  );
};

export default CardBodyComponent;
