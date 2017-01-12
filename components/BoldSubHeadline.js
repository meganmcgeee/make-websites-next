import get from 'lodash/fp/get';
import styled from 'styled-components';

export default styled.h2`
  color: #007ee5;
  font-family: 'Gilroy', sans-serif;
  font-size: 62.5px;
  font-weight: ${get(`theme.fontWeight.extraBold`)};
  letter-spacing: 1.1px;
  line-height: 1;
  text-transform: lowercase;
`;
