import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const Loader: React.FC = () => {
  return (
    <Wrapper>
      <StyledImage height={200} width={200} src='/eringi-min.png' alt='eringi' />
    </Wrapper>
  );
};

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const StyledImage = styled(Image)`
  animation: 1s ${rotate} ease-out 0.5s infinite;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
