import styled from 'styled-components';
import { colors } from '../styles';
import { BiPlus } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

export const Plus = styled(BiPlus)`
  color: ${colors.gray};
  height: 1.4em;
  width: 1.4em;
`;

export const DeleteIcon = styled(MdDeleteForever)`
  color: ${colors.delete};
  height: 1.4em;
  width: 1.4em;
`;
