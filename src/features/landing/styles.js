import styled from "styled-components";
import landingBannerImg from "../../assets/images/landing-background.png";

export const LandingContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;

  & > section:first-of-type {
    flex: 5.5;
    position: relative;
    background-image: url(${landingBannerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  & > section:last-of-type {
    flex: 4.5;
  }

  & > section:first-of-type svg {
    fill: ${({ theme }) => theme.colors.secondary};
    max-width: 380px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
