import React from "react";
import { ContainerCard, Icon, Years, Title, Description } from "./Card.styled";

const Card = (props) => {
  return (
    <ContainerCard>
      <Icon className={props.icon}></Icon>
      <Years>{props.year} </Years>
      <Title>{props.title}</Title>
      <Description>{props.desc}</Description>
    </ContainerCard>
  );
};

export default Card;
