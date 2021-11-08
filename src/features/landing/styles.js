import styled from "styled-components/macro";
import landingBannerImg from "../../assets/images/landing-background.png";
import { Logo } from "../../shared/component/Icons";

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
    display: flex;
    align-items: center;
    padding: 25px;
  }

  & a {
    display: block;
    margin: 15px 0;
  }

  & h1 {
    font-weight: 900;
    font-size: 3.5rem;
    font-stretch: extra-expanded;
    padding: 40px 0;
  }

  & h2 {
    font-weight: 900;
  }
`;

export const LogoBanner = styled(Logo)`
  & svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`
