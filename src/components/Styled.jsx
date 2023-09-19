import styled from 'styled-components';

export const Inner = styled.div`
  margin: auto;
  position: relative;
  display: ${(props) => (props.display ? props.display : 'block')};
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'unset')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'unset'};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'unset'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'unset')};
  width: 100%;
  max-width: 1000px;
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const FlexGrowBox = styled.div`
  flex-grow: 1;
`;
