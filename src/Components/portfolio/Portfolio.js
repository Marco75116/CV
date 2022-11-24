import React, { useState } from "react";

import {
  PortfolioContainer,
  PortfolioSection,
  PortfolioTitle,
  FiltersContainer,
  Filter,
  PortfolioGrid,
  CardProject,
  Thumbnail,
  Mask,
  Category,
  ProjectTitle,
  ProjectButton,
  GridItem,
  TechUsed,
  ImgPreview,
} from "./Portofolio.styled";

import Projects from "./Projects";

const Portfolio = () => {
  const [items, setItems] = useState(Projects);
  const [filter, setFilter] = useState("");

  return (
    <PortfolioContainer>
      <PortfolioSection>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <FiltersContainer>
          <Filter onClick={() => setFilter("")}>Everything</Filter>
          <Filter onClick={() => setFilter("Blockchain Programming")}>
            Blockchain Programming
          </Filter>
          <Filter onClick={() => setFilter("Web Development")}>
            Web Development
          </Filter>
          <Filter onClick={() => setFilter("Data Analysis")}>
            Data Analysis
          </Filter>
          <Filter onClick={() => setFilter("IA")}>IA</Filter>
          <Filter onClick={() => setFilter("Others")}>Others</Filter>
        </FiltersContainer>

        <PortfolioGrid>
          {items
            .filter((item) => {
              if (filter !== "") return item.category === filter;
              return true;
            })
            .map((item, i) => {
              return (
                <GridItem>
                  <CardProject>
                    <Thumbnail>
                      <ImgPreview src={item.image} />
                      <Mask></Mask>
                    </Thumbnail>{" "}
                    <Category>{item.category}</Category>
                    <ProjectTitle>{item.title}</ProjectTitle>
                    {item.techs.length !== 0 && (
                      <TechUsed>
                        Techs used :{" "}
                        {item.techs.map((tech, key) => {
                          return (
                            <span>
                              {tech}
                              {key < item.techs.length - 2 && ", "}
                              {key === item.techs.length - 2 && " and "}
                              {key === item.techs.length - 1 && "."}
                            </span>
                          );
                        })}
                      </TechUsed>
                    )}
                    <ProjectButton href={item.link} target="_blank">
                      <i className="icon-link work__button-icon"></i>
                    </ProjectButton>
                  </CardProject>
                </GridItem>
              );
            })}
        </PortfolioGrid>
      </PortfolioSection>
    </PortfolioContainer>
  );
};

export default Portfolio;
