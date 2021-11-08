import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';
import styled, {useTheme} from 'styled-components/macro';

const LoadingIndicatorWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


function LoadingIndicator() {
  const theme = useTheme();

  return (
    <LoadingIndicatorWrapper>
      <SpinnerCircularFixed color={theme.colors.secondary}/>
    </LoadingIndicatorWrapper>
  )
}

export default LoadingIndicator
