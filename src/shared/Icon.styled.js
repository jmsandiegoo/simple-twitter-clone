import styled from "styled-components";

export const IconContainer = styled.div`
  fill: ${({ fill, theme }) => fill || theme.colors.text};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;
