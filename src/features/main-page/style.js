import styled, { css } from "styled-components/macro";

export const MainContentWrapper = styled.div`
  border-width: ${({ borderWidth }) => borderWidth || "1px"};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const StyledHeader = styled(MainContentWrapper)`
  border-width: 0 0 1px 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1px 20px;
  position: sticky;
  top: 0px;
`;

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledName = styled.h4`
  font-weight: bold;
  margin: 5px 0;
`;

export const StyledText = styled.p`
  margin: 5px 0;
`;

export const InlineButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
