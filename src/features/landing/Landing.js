import React from "react";
import { useTheme } from "styled-components";
import { useHistory } from "react-router";
import { LandingContainer, LogoBanner } from "./styles";
import { Logo } from "../../shared/Icons";
import { Button } from "../../shared/Button.styled";

export default function Landing() {
  const theme = useTheme();
  const history = useHistory();

  return (
    <LandingContainer>
      <section>
        <LogoBanner fill={theme.colors.accent} maxWidth="380px"/>
      </section>
      <section>
        <div>
          <Logo height="3rem"/>
          <h1>Happening Now</h1>
          <h2>Join Twitter Clone Today.</h2>
          <Button buttonType="secondary" maxWidth="300px" onClick={() => history.push("/signup")}>
            Sign Up
          </Button>
          <Button buttonType="primary" maxWidth="300px" onClick={() => history.push("/login")}>
            Sign In
          </Button>
        </div>
      </section>
    </LandingContainer>
  );
}
