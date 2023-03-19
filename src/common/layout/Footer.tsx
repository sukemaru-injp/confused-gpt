import React from 'react';
import styled from 'styled-components';
import { colors, spacings } from '../ui/styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>お問い合わせ</div>
      <Write>
        <p>&copy; 2023-sukemaru</p>
      </Write>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.white};
  padding: ${spacings.S} 0;
`;

const Write = styled.div``;
