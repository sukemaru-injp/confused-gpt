import styled from 'styled-components';
import { spacings, colors } from '../styles';

export const Button = styled.button`
  border-radius: 5px;
  padding: ${spacings.S} ${spacings.M};
  color: ${colors.white};
  background-color: ${colors.sub};
  width: '100%';
  border: none;
  cursor: pointer;
`;
