import styled from "styled-components";

export const ContainerResume = styled.div``;
export const ResumeSection = styled.section``;
export const ResumeTitles = styled.h2``;
export const ResumeContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
`;
export const ResumeType = styled.div`
  /* display: grid; */
  background-color: ${(props) => props.theme.colors.containerColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.875rem;
  box-shadow: ${(props) => props.theme.shadow};
`;
