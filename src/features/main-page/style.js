import styled, { css } from "styled-components";

export const MainContentWrapper = styled.div`
border: 1px solid ${({theme}) => theme.colors.border};
`

export const StyledHeader = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  padding: 0 20px;
`