import styled from "styled-components";

export const ServicesContainer = styled.div``;

export const ServicesSection = styled.section``;

export const ServicesTitle = styled.h2``;

export const ServicesContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  justify-items: center;
`;

export const ServiceContainer = styled.div`
  text-align: center;
  padding: 1.875rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.containerColor};
  transition: all 0.3s ease-in-out;
  :hover {
    transform: translateY(-10px);
  }
  :nth-child(1) {
    background-color: rgb(108, 108, 229);
    box-shadow: 0px 5px 20px 0px rgb(108, 108, 229 / 50%);
  }
  :nth-child(2) {
    background-color: rgb(249, 215, 76);
    box-shadow: 0px 5px 20px 0px rgb(249, 215, 76 / 50%);
    h3 {
      color: ${(props) => props.theme.colors.titleColor};
    }
    p {
      color: ${(props) => props.theme.colors.textColor};
    }
  }
  :nth-child(3) {
    background-color: rgb(249, 123, 139);
    box-shadow: 0px 5px 20px 0px rgb(249, 123, 139 / 50%);
  }
`;

export const ServiceImg = styled.img`
  margin-bottom: 1.25rem;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const ServiceTitle = styled.h3`
  font-size: ${(props) => props.theme.font.h3FontSize};
  color: #fff;
`;

export const ServiceDescription = styled.p`
  color: #f8f9fa;
`;
