import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilSection = styled.section``;

export const Profil = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.titleColor};
`;

export const Img = styled.img``;

export const Name = styled.h1``;

export const ProfilDescription = styled.div`
  margin-bottom: 10px;
`;

export const BouttonContact = styled.button`
  padding: 0.75rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColor};
  font-weight: ${(props) => props.theme.weight.boldFont};
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;
