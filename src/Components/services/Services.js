import React from "react";
import Image1 from "../../assets/Solidity-Logo.wine.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/icons8-analysis-64.png";
import {
  ServicesContainer,
  ServicesSection,
  ServicesTitle,
  ServicesContainerGrid,
  ServiceContainer,
  ServiceImg,
  ServiceTitle,
  ServiceDescription,
} from "./Services.styled";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Blockchain Programming",
    description: "Write smart contracts dealing with ERC721, ERC1155, ERC20.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Building and maintenance of decentralized Applications on EVM and Tezos.",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Analysis",
    description:
      "Cleaning, transforming, modeling data transactions to extract and expose useful information.",
  },
];

const Services = (props) => {
  return (
    <ServicesContainer>
      <ServicesSection>
        <ServicesTitle ref={props.refProp}>Services</ServicesTitle>
        <ServicesContainerGrid>
          {data.map((service, i) => {
            return (
              <ServiceContainer key={i}>
                <ServiceImg height={i === 0 && "96px"} src={service.image} />
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContainer>
            );
          })}
        </ServicesContainerGrid>
      </ServicesSection>
    </ServicesContainer>
  );
};

export default Services;
