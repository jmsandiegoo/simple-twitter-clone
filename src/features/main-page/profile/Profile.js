import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MainContentWrapper, StyledHeader } from "../style";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import { useParams } from "react-router";
import { StyledSmall } from "../../../shared/Small.styled";
import styled from "styled-components/macro";
import { Button } from "../../../shared/Button.styled";
import { ProfileNav } from "./ProfileNav";
const ProfileDetailsWrapper = styled.div`
  padding: 20px;
`;

const AvatarButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileStyledSmall = styled(StyledSmall)`
  padding: 0 15px 0 0;
`;

const FollowWrapper = styled.div`
  margin: 15px 0;

  & span {
    padding: 0 15px 0 0;
    cursor: pointer;
  }
`;

function Profile() {
  const [user, setUser] = useState({});
  const { username } = useParams();

  const fetchUserDetails = async () => {
    try {
      const userRes = await API.graphql({
        query: queries.getUser,
        variables: { username: username },
      });
      if (userRes.error) {
        throw new Error({ cause: userRes.error });
      }
      setUser(userRes.data.getUser);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (user) {
    return (
      <MainContentWrapper>
        <StyledHeader>
          <h3>
            {user.name}
            <br />
            <StyledSmall>Tweets</StyledSmall>
          </h3>
        </StyledHeader>
        {/* Profile Details Wrapper */}
        <ProfileDetailsWrapper>
          <AvatarButtonWrapper>
            <div></div>
            <Button buttonType="ghost">Edit Profile</Button>
          </AvatarButtonWrapper>
          <h3>
            {user.name} <br />
            <StyledSmall>@{user.username}</StyledSmall>
          </h3>
          <p>
            Aspiring Full Stack Developer Man technologist | NUS Computer
            Science Student
          </p>
          <ProfileStyledSmall>Singapore</ProfileStyledSmall>
          <ProfileStyledSmall>Born October 7, 1999</ProfileStyledSmall>
          <ProfileStyledSmall>Joined Febuary 2013</ProfileStyledSmall>
          <FollowWrapper>
            <span>
              <strong>100</strong> <StyledSmall>Following</StyledSmall>
            </span>
            <span>
              <strong>200</strong> <StyledSmall>Followers</StyledSmall>
            </span>
          </FollowWrapper>
          <ProfileNav />
        </ProfileDetailsWrapper>
      </MainContentWrapper>
    );
  } else {
    return (
      <MainContentWrapper>
        <StyledHeader>
          <h3>Profile</h3>
        </StyledHeader>
      </MainContentWrapper>
    );
  }
}
export default Profile;
