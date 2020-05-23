import React from "react";
import styled from "styled-components";
import { Grid, Typography, IconButton } from "@material-ui/core";
import CustomMenu from "./CustomMenu";

const CardPost: React.FC = (props) => {
  const CardHeader = styled.div``;
  const Tag = styled.p`
    display: flex;

    align-items: center;
  `;
  const Label = styled.span`
    color: #555555;
    margin-left: 10px;
    font-family: "FUTURALight" !important;
  `;
  const Sepearator = styled.div`
    width: 60%;
    height: 6px;
    background-color: #d4c863;
  `;
  const CardBody = styled.div``;
  const LinkTitle = styled(Typography)`
    font-family: "Freight" !important;
  `;
  const CardActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    align-items: center;
  `;
  const Date = styled.span`
    font-family: "FUTURABook" !important;
    margin-right: auto;
    color: #9d9d9d;
  `;
  const Author = styled.span`
    font-family: "FUTURABook" !important;
    color: #9d9d9d;
  `;
  const Description = styled(Typography)`
    color: #353535;
    font-family: "FUTURALight" !important;
  `;

  return (
    <Grid item md={4} xs={12}>
      <CardHeader>
        <Tag>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.9688 10.3969C8.94531 10.3736 8.91358 10.3606 8.88052 10.3606C8.84746 10.3606 8.81573 10.3736 8.79224 10.3969L6.97661 12.2125C6.13599 13.0531 4.71724 13.1422 3.78911 12.2125C2.85942 11.2828 2.94849 9.86563 3.78911 9.025L5.60474 7.20938C5.65317 7.16094 5.65317 7.08125 5.60474 7.03282L4.98286 6.41094C4.95937 6.38768 4.92764 6.37463 4.89458 6.37463C4.86152 6.37463 4.82979 6.38768 4.8063 6.41094L2.99067 8.22657C1.6688 9.54844 1.6688 11.6875 2.99067 13.0078C4.31255 14.3281 6.45161 14.3297 7.77192 13.0078L9.58755 11.1922C9.63599 11.1438 9.63599 11.0641 9.58755 11.0156L8.9688 10.3969ZM13.0094 2.99063C11.6875 1.66875 9.54849 1.66875 8.22817 2.99063L6.41099 4.80625C6.38772 4.82975 6.37467 4.86147 6.37467 4.89453C6.37467 4.9276 6.38772 4.95932 6.41099 4.98282L7.0313 5.60313C7.07974 5.65157 7.15942 5.65157 7.20786 5.60313L9.02349 3.7875C9.86411 2.94688 11.2829 2.85782 12.211 3.7875C13.1407 4.71719 13.0516 6.13438 12.211 6.975L10.3954 8.79063C10.3721 8.81412 10.359 8.84585 10.359 8.87891C10.359 8.91197 10.3721 8.9437 10.3954 8.96719L11.0172 9.58907C11.0657 9.6375 11.1454 9.6375 11.1938 9.58907L13.0094 7.77344C14.3297 6.45157 14.3297 4.3125 13.0094 2.99063ZM9.53286 5.81719C9.50937 5.79393 9.47764 5.78088 9.44458 5.78088C9.41152 5.78088 9.37979 5.79393 9.3563 5.81719L5.81724 9.35469C5.79397 9.37818 5.78092 9.40991 5.78092 9.44297C5.78092 9.47603 5.79397 9.50776 5.81724 9.53125L6.43599 10.15C6.48442 10.1984 6.56411 10.1984 6.61255 10.15L10.15 6.6125C10.1985 6.56407 10.1985 6.48438 10.15 6.43594L9.53286 5.81719Z"
              fill="#555555"
            />
          </svg>
          <Label>Course</Label>
        </Tag>
        <Sepearator color="#D4C863" />
      </CardHeader>
      <CardActions>
        <Date>23/10/2019</Date>
        <div>
          <Author>Momen</Author>

          <CustomMenu />
        </div>
      </CardActions>
      <CardBody>
        <LinkTitle variant="h6" className="my-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          auctor sed enim, eleifend tristique nec.
        </LinkTitle>
        <Description variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          auctor sed enim, eleifend tristique nec.
        </Description>
      </CardBody>
    </Grid>
  );
};

export default CardPost;
