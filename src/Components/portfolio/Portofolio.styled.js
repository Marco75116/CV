import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: relative;
`;
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

  @media only screen and (max-width: 900px) {
    row-gap: 1rem;
    column-gap: 0.875rem;
    -webkit-box-pack: center;
    flex-wrap: wrap;
  }
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
  @media only screen and (max-width: 1100px) {
    row-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    row-gap: 2rem;
    grid-template-columns: none;
  }
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

export const Thumbnail = styled.div`
  @media only screen and (max-width: 900px) {
    width: 330px;
  }
`;

export const ImgPreview = styled.img`
  width: 27rem;

  @media only screen and (max-width: 1450px) {
    width: 21rem;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 320px;
  }
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
export const DescriptionContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top || "2.75rem"};
  margin: 0 0 0.98rem;
  padding: 0 1.25rem;
`;
export const ProjectTitle = styled.h3`
  color: white;
  font-size: ${(props) => props.theme.font.h3FontSize};
  transition: 0.3s;
  opacity: 0;
`;

export const TechUsed = styled.p`
  color: white;
  font-size: ${(props) => props.theme.font.normalSize};
  transition: 0.3s;
  opacity: 0;
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
