import React from "react";
import styled from "styled-components/macro";
import { NavLink, useParams } from "react-router-dom";

const StyledNav = styled.nav`
  margin: 0 -20px;
  display: flex;
  justify-content: space-around;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.border};
  border-style: solid;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.smallText};
  /* font-size: 18px; */
  white-space: nowrap;
  text-decoration: none;
  display: block;
  flex: 1;
  text-align: center;
  padding: 15px 15px;

  &:hover {
    background-color: #1c1c1c;
  }

  &.active {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }
`;

export function ProfileNav() {
  const { username } = useParams();
  return (
    <StyledNav>
      <StyledNavLink exact to={`/${username}`}>
        Tweets
      </StyledNavLink>
      <StyledNavLink to={`/${username}/with_replies`}>
        Tweets & Replies
      </StyledNavLink>
      <StyledNavLink to={`/${username}/media`}>Media</StyledNavLink>
      <StyledNavLink to={`/${username}/likes`}>Likes</StyledNavLink>
    </StyledNav>
  );
}
