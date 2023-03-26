import styled from 'styled-components';
import { colors } from '../styles';
import { BiPlus } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { BsFacebook, BsGithub } from 'react-icons/bs';

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

export const FacebookIcon = styled(BsFacebook)`
  color: #344d86;
  height: 1.4em;
  width: 1.4em;
`;

export const GithubIcon = styled(BsGithub)`
  height: 1.4em;
  width: 1.4em;
`;
