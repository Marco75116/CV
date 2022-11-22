import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.colors.bodyColor};
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  width: 110px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.a``;

export const NavContainer = styled.nav``;
export const NavMenu = styled.div``;
export const NavList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;
export const NavItem = styled.li``;
export const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-weight: ${(props) => props.theme.weight.boldFont};
`;

export const Copyright = styled.span`
  color: hsl(245, 15%, 65%);
  font-size: ${(props) => props.theme.font.smallFontSize};
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
`;
