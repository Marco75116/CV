import styled from "styled-components";

export const ContainerCard = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  position: relative;
  padding-bottom: 3.125rem;
  padding-left: 3.125rem;
  :last-child {
    padding-bottom: 0px;
  }
  ::before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.firstColor};
    position: absolute;
    left: 0.25rem;
  }
`;
export const Icon = styled.i`
  position: absolute;
  left: -0.4375rem;
  top: 0px;
  font-size: ${(props) => props.theme.font.h2FontSize};
  color: ${(props) => props.theme.colors.firstColor};
  background-color: ${(props) => props.theme.colors.containerColor};
  padding: 8px 0px;
`;
export const Years = styled.span`
  color: #8b88b1;
  font-size: ${(props) => props.theme.font.smallFontSize};
`;
export const Title = styled.h3`
  margin: 0.5rem 0px;
  color: ${(props) => props.theme.colors.titleColor};
  font-size: ${(props) => props.theme.font.h3FontSize};
`;
export const Description = styled.p`
  margin: 0px;
`;
