import styled from "styled-components";

export const PortfolioContainer = styled.div``;
export const PortfolioSection = styled.section``;
export const PortfolioTitle = styled.h1`
  margin-bottom: 3.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-size: ${(props) => props.theme.font.h1FontSize};
  margin-left: 0.875rem;
`;
export const FiltersContainer = styled.div`
  display: flex;
  column-gap: 1.875rem;
  margin-bottom: 2.5rem;
`;
export const Filter = styled.span`
  cursor: pointer;
  font-weight: ${(props) => props.theme.weight.boldFont};
  transition: 0.3s;
  :hover {
    color: ${(props) => props.theme.colors.firstColor};
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardProject = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow};
  width: auto;
  width: fit-content;
  overflow: hidden;
  :hover a {
    opacity: 1;
  }
  :hover h3 {
    opacity: 1;
  }
  :hover span {
    opacity: 1;
    transform: translateY(0);
  }
  :hover div {
    opacity: 0.9;
  }
  :hover p {
    opacity: 0.9;
  }
`;

export const Thumbnail = styled.div``;

export const ImgPreview = styled.img`
  height: 400px;
  width: 27rem;
`;

export const Mask = styled.div`
  background-color: #6c6ce5;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  opacity: 0;
`;
export const Category = styled.span`
  color: white;
  background-color: ${(props) => props.theme.colors.firstColor};
  border-bottom-left-radius: 0.98rem;
  border-bottom-right-radius: 0.98rem;
  position: absolute;
  top: 0;
  left: 1.75rem;
  font-size: ${(props) => props.theme.font.smallFontSize};
  display: inline-block;
  padding: 0.19rem 0.625rem;
  transform: translateY(-40px);
  transition: 0.3s;
`;
export const ProjectTitle = styled.h3`
  color: white;
  font-size: ${(props) => props.theme.font.h3FontSize};
  margin: 0 0 0.98rem;
  padding: 0 1.25rem;
  position: absolute;
  top: 3.75rem;
  transform: translateY(30px);
  transition: 0.3s;
  opacity: 0;
`;

export const TechUsed = styled.p`
  color: white;
  font-size: ${(props) => props.theme.font.normalSize};
  position: absolute;
  top: 8rem;
  transition: 0.3s;
  opacity: 0;
  margin: 0 0 0.98rem;
  padding: 0 1.25rem;
  opacity: 0;
`;

export const ProjectButton = styled.a`
  color: white;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-size: ${(props) => props.theme.font.h3FontSize};
  display: block;
  background-color: #ffd15c;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  transition: 0.3s;
  opacity: 0;
`;
