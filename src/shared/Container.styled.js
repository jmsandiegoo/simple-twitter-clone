import styled from "styled-components";

export const Container = styled.div`
  padding: ${({padding}) => padding || '15px'};
  max-width: ${({maxWidth}) => maxWidth || 'none'}; 
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
`;