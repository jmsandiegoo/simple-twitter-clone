import styled, { ThemeConsumer } from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};
  padding: 10px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  ${({ theme, buttonType, additionalStyles }) => {
    let dynamicStyleStr = "";
    switch (buttonType) {
      case "primary":
        dynamicStyleStr += `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.inverseText};
          border: none;
          &:hover {
            background-color: #cccccc;
          }
        `;
        break;
      case "secondary":
        dynamicStyleStr += `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text};
          border: none;
          &:hover {
            background-color: #1a8cd8;
          }
        `;
        break;
      case "ghost":
        dynamicStyleStr += `
          background-color: transparent;
          color: ${theme.colors.text};
          border: solid 1px ${theme.colors.primary};
          &:hover: {
            background-color: rgba(239, 243, 244, 0.1);
          }
        `;
        break;
      default:
      // Do Nothing
    }
    if (additionalStyles) {
      dynamicStyleStr += additionalStyles && additionalStyles;
    }
    return dynamicStyleStr;
  }}
`;
