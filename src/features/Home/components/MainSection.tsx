import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { spacings } from '@/common/ui/styles';
import { mediaQuery } from '@/common/ui/styles/mixin';
import { Form } from './Form';
import Image from 'next/image';
import { CreateIntroduceRequest } from '@/model/CreateIntroduce';
import { ResultModal } from './ResultModal';

type ContentsReadyType =
  | { type: 'notReady' }
  | { type: 'ready'; val: CreateIntroduceRequest['value'] };

export const MainSection = () => {
  const [openModal, updateOpenModal] = useState(false);

  const [contentReady, setContentReady] = useState<ContentsReadyType>({ type: 'notReady' });

  const handleSubmit = useCallback(async (val: CreateIntroduceRequest['value']) => {
    setContentReady({
      type: 'ready',
      val,
    });
    updateOpenModal(true);
  }, []);

  const handleClose = useCallback(() => {
    updateOpenModal(false);
  }, []);
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit} />
        <ImageWrapper>
          <Image height={300} width={300} src='/eringi-min.png' alt='eringi' />
        </ImageWrapper>
      </Wrapper>

      {contentReady.type === 'ready' && (
        <ResultModal
          isOpen={openModal}
          onClose={handleClose}
          gender={contentReady.val.gender}
          age={contentReady.val.age}
          likes={contentReady.val.likes}
        />
      )}
    </>
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
