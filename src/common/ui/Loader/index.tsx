import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const Loader: React.FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image height={240} width={240} src='/eringi-min.png' alt='eringi' />
      </ImageWrapper>
    </Wrapper>
  );
};

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  animation: 1s ${rotate} ease-out 0.5s infinite;
`;
