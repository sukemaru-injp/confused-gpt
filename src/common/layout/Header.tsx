import React from 'react';
import styled from 'styled-components';
import { colors, spacings } from '../ui/styles';
import { Anchor } from '../ui/Anchor';

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Anchor href='/'>
        <Title>エリンギAI</Title>
      </Anchor>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  height: 50px;
  background-color: ${colors.main};
  display: flex;
  align-items: center;
  padding: 0 ${spacings.S};
`;
const Title = styled.h2`
  color: ${colors.white};
  font-weight: bold;
`;
