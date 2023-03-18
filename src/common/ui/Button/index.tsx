import styled from 'styled-components';
import { spacings, colors } from '../styles';

export const Button = styled.button`
  border-radius: 5px;
  padding: ${spacings.XS} ${spacings.S};
  color: ${colors.white};
  background-color: ${colors.sub};
`;
