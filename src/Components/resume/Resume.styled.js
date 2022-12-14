import styled from "styled-components";

export const ContainerResume = styled.div``;
export const ResumeSection = styled.section``;
export const ResumeTitle = styled.h1`
  margin-bottom: 3.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-size: ${(props) => props.theme.font.h1FontSize};
  margin-left: 0.875rem;
`;
export const ResumeContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
  @media only screen and (max-width: 900px) {
    row-gap: 2rem;
    grid-template-columns: none;
  }
`;
export const ResumeType = styled.div`
  /* display: grid; */
  background-color: ${(props) => props.theme.colors.containerColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.875rem;
  box-shadow: ${(props) => props.theme.shadow};
`;
