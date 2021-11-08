import styled from "styled-components/macro";

export const IconContainer = styled.div`
  & svg {
    fill: ${({ fill, theme }) => fill || theme.colors.text};
    max-width: ${({ maxWidth }) => maxWidth || "none" };
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    cursor: ${({cursor}) => cursor || 'auto'};
  }
`;
