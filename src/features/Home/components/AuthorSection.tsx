import React from 'react';
import styled from 'styled-components';
import { spacings } from '@/common/ui/styles';

export const AuthorSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>作者について</Title>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: ${spacings.M};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
`;
