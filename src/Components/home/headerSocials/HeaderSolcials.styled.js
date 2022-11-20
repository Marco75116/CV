import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
export const ContainerSocialsIcons = styled.div``;

export const SocialLink = styled.a`
  padding: 0px 5px;
`;
export const SocialIcon = styled(Icon)`
  font-size: 24px;
  color: ${(props) => props.color};
`;
