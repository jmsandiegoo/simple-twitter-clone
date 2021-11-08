import styled from "styled-components/macro";

export const Container = styled.div`
  padding: ${({padding}) => padding || '15px'};
  max-width: ${({maxWidth}) => maxWidth || 'none'}; 
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
`;

export const Wrapper = styled.div`

`
