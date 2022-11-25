import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-bottom: 4rem;
`;
export const ContactSection = styled.section``;
export const ContactTitle = styled.h1`
  margin-bottom: 3.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-size: ${(props) => props.theme.font.h1FontSize};
  margin-left: 0.875rem;
`;
export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  @media only screen and (max-width: 900px) {
    row-gap: 2rem;
    grid-template-columns: none;
  }
`;
export const ContainerInfos = styled.div``;
export const Text = styled.span`
  color: ${(props) => props.theme.colors.textColor};
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  @media only screen and (max-width: 900px) {
    column-gap: 1rem;
  }
`;
export const TextInput = styled.textarea`
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.containerColor};
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.2rem 1.175rem;
  outline: none;
  border: none;
  height: ${(props) => props.height || "3.5rem"};
  resize: none;
  font-family: "Rubik", sans-serif;
`;
export const ButtonSend = styled.button`
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
  width: 30%;
  @media only screen and (max-width: 900px) {
    width: 50%;
  }
`;
