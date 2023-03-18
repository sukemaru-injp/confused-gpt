import React from 'react';
import styled from 'styled-components';
import { Anchor } from '@/common/ui/Anchor';
import { spacings } from '@/common/ui/styles';
export const Failed = () => {
  return (
    <Wrapper>
      <h2>もう一度お試しください</h2>
      <Anchor href='/'>トップへ戻る</Anchor>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${spacings.M} 0;
`;
