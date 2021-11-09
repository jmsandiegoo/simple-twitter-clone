import styled from "styled-components/macro";

export const StyledSmall = styled.small`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.smallText};
  font-weight: normal;
`;
