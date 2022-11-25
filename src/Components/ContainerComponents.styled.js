import styled from "styled-components";

export const ContainerAll = styled.div``;
export const ContainerContent = styled.div`
  margin-left: 110px;
  @media only screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const ContainerComponentsCenter = styled.div`
  margin: 0px 10%;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  @media only screen and (max-width: 900px) {
    margin: 0px 30px;
  }
`;
