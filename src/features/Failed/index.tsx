import React from 'react';
import styled from 'styled-components';

export const Failed = () => {
  return (
    <Wrapper>
      <h2>もう一度お試しください</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
