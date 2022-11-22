import React from "react";
import {
  SidebarContainer,
  LogoContainer,
  NavContainer,
  NavMenu,
  NavList,
  NavItem,
  NavLink,
  Copyright,
} from "./Sidebar.styled";
import Logo from "../../assets/logo.svg";

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <i className="icon-menu"></i>
      </LogoContainer>

      <NavContainer>
        <NavMenu>
          <NavList>
            <NavItem onClick={props.home}>
              <NavLink>
                <i className="icon-home"></i>
              </NavLink>
            </NavItem>

            <NavItem onClick={props.about}>
              <NavLink>
                <i className="icon-user-following"></i>
              </NavLink>
            </NavItem>

            <NavItem onClick={props.services}>
              <NavLink>
                <i className="icon-briefcase"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <i className="icon-layers"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <i className="icon-note"></i>
              </NavLink>
            </NavItem>

            <NavItem onClick={props.contact}>
              <NavLink>
                <i className="icon-bubble"></i>
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>
      </NavContainer>
      <NavContainer>
        <Copyright>&copy; 2022 - 2023</Copyright>
      </NavContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
