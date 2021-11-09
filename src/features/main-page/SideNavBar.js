import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import {
  authUser,
  authIsSignedIn,
} from "../authentication/authenticationSlice";
import { Logo } from "../../shared/component/Icons";
import { StyledSmall } from "../../shared/Small.styled";
import { StyledName } from "./style";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  /* align-items: end; */
`;

const StyledNavLink = styled(NavLink)``;

export function SideNavBar() {
  const user = useSelector(authUser);
  const isSignedIn = useSelector(authIsSignedIn);

  return (
    <StyledNav>
      <Logo width="2rem" />
      {isSignedIn && <StyledNavLink to="/home">Home</StyledNavLink>}
      <StyledNavLink to="/explore">Explore</StyledNavLink>
      {isSignedIn && (
        <>
          <StyledNavLink to="/notifications">Notifications</StyledNavLink>
          <StyledNavLink to={`/${user.username}`}>Profile</StyledNavLink>
          <StyledName>{user.attributes.name}</StyledName>
          <StyledSmall>{`@${user.username}`}</StyledSmall>
        </>
      )}
    </StyledNav>
  );
}
