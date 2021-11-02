import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { SideNavBar } from './SideNavBar';
import { SideBar } from './SideBar';
import { Home } from './home';
import { Explore } from './explore';
import { Profile }  from './profile';

const GridWrapper = styled.div`
  max-width: 1290px;
  margin: 0 auto;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 600px) 1fr;
  grid-template-rows: 100vh;
`

export function MainPage() {
  return (
    <GridWrapper>
      <StyledGrid>
        <SideNavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/:username" component={Profile} />
        </Switch>
        <SideBar />
      </StyledGrid>
    </GridWrapper>
  )
}
