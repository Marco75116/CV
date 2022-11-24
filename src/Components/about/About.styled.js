import styled from "styled-components";

export const ContainerAbout = styled.div`
  font-size: ${(props) => props.theme.font.h1FontSize};
`;

export const AboutSections = styled.section``;
export const AboutTitle = styled.h1`
  margin-bottom: 3.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-size: ${(props) => props.theme.font.h1FontSize};
  margin-left: 0.875rem;
`;
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
export const ImgProfile = styled.div`
  display: flex;
  justify-content: center;
`;

export const DataGrid = styled.div`
  background-color: ${(props) => props.theme.colors.containerColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.875rem;
  box-shadow: ${(props) => props.theme.shadow};
  /* height: 10rem; */
`;

export const TextDescriptions = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.font.normalFontSize};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.textColor};
  text-decoration: none;
  font-weight: bold;

  :hover {
    color: black;
    transition: 0.3s;
  }
`;

export const ButtonDoawnload = styled.button`
  padding: 0.75rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColor};
  font-weight: ${(props) => props.theme.weight.boldFont};
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }
`;
