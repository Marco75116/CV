import React from "react";
import Data from "./Resume.data";
import {
  ContainerResume,
  ResumeSection,
  ResumeTitle,
  ResumeContainerGrid,
  ResumeType,
} from "./Resume.styled";
import Card from "./card/Card";
const Resume = (props) => {
  return (
    <ContainerResume>
      <ResumeSection>
        <ResumeTitle ref={props.refProp}>Resume</ResumeTitle>
        <ResumeContainerGrid>
          <ResumeType>
            {Data.map((item, id) => {
              if (item.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={item.icon}
                    title={item.title}
                    year={item.year}
                    desc={item.desc}
                  />
                );
              }
            })}
          </ResumeType>

          <ResumeType>
            {Data.map((item, id) => {
              if (item.category === "experience") {
                return (
                  <Card
                    key={id}
                    icon={item.icon}
                    title={item.title}
                    year={item.year}
                    desc={item.desc}
                  />
                );
              }
            })}
          </ResumeType>
        </ResumeContainerGrid>
      </ResumeSection>
    </ContainerResume>
  );
};

export default Resume;
