import React, { useCallback } from 'react';
import styled from 'styled-components';
import { spacings } from '@/common/ui/styles';
import { mediaQuery } from '@/common/ui/styles/mixin';
import { Form } from './Form';
import Image from 'next/image';
import { CreateIntroduceRequest } from '@/model/CreateIntroduce';
import { generateIntroduceAdapter } from '@/utils/adapter/generateInterviewAdapter';

export const MainSection = () => {
  const handleSubmit = useCallback(async (val: CreateIntroduceRequest['value']) => {
    const res = await generateIntroduceAdapter({
      value: val,
      mock: true,
    });

    console.log('生成!', res);
  }, []);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} />
      <ImageWrapper>
        <Image height={300} width={300} src='/eringi-min.png' alt='eringi' />
      </ImageWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacings.M};
  padding: ${spacings.S};

  ${mediaQuery(
    `
    flex-direction: column;
  `,
    'spOnly',
  )}
`;

const ImageWrapper = styled.div``;
