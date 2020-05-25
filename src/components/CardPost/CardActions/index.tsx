import React from "react";
import styled from "styled-components";
import CustomMenu from "../CustomMenu";

interface Props {
  author: string;
  date: string;
}

const CardActionsComponent: React.FC<Props> = (props: Props) => {
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

  return (
    <CardActions>
      <Date>{props.date}</Date>
      <div>
        <Author>{props.author}</Author>
        <CustomMenu />
      </div>
    </CardActions>
  );
};

export default CardActionsComponent;
