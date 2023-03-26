import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Dialog } from '@/common/ui/Dialog';
import { Button } from '@/common/ui/Button';
import { colors, spacings } from '@/common/ui/styles';
import { Likes } from '@/model/CreateIntroduce';
import { GenderType } from '@/model/Gender';
import {
  generateIntroduceAdapter,
  IntroduceAdapter,
} from '@/utils/adapter/generateInterviewAdapter';
import { resource, Resource } from '@/utils';
import { Failed } from '@/features/Failed';
import { mediaQuery } from '@/common/ui/styles/mixin';
import { toast } from 'react-toastify';
import { Loader } from '@/common/ui/Loader';

type ViewProps = {
  text: string;
  onClose: () => void;
};

const ContentsView: React.FC<ViewProps> = ({ text, onClose }) => {
  const handleClickCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('コピーしました');
    });
  }, [text]);

  return (
    <Wrapper>
      <Title>自己紹介</Title>

      <p>{text}</p>

      <Lower>
        <Button onClick={handleClickCopy}>コピーする</Button>
        <CloseButton onClick={() => onClose()}>閉じる</CloseButton>
      </Lower>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: ${spacings.L};

  ${mediaQuery(
    `
    padding: ${spacings.S};
  `,
    'spOnly',
  )}
`;
const Lower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${spacings.M};
  padding: ${spacings.L} ${spacings.L} ${spacings.S};
  text-align: center;

  ${mediaQuery(
    `
    flex-direction: column;
  `,
    'spOnly',
  )}
`;
const CloseButton = styled(Button)`
  background-color: ${colors.sub};
`;
const Title = styled.h3`
  padding: ${spacings.S};
  text-align: center;
`;

type ContentsProps = {
  generateResource: Resource<IntroduceAdapter>;
  onClose: () => void;
};
const Contents: React.FC<ContentsProps> = ({ onClose, generateResource }) => {
  const res = generateResource.read();
  if (res.isErr() || res.value.data.text == null) {
    return <Failed />;
  }

  return (
    <>
      <ContentsView onClose={onClose} text={res.value.data.text} />
    </>
  );
};

type Props = {
  isOpen: boolean;
  gender: GenderType;
  age: number;
  likes: Likes;
  onClose: () => void;
};
export const ResultModal: React.FC<Props> = ({ isOpen, onClose, gender, age, likes }) => {
  const generateResource = useMemo(
    () =>
      resource(
        generateIntroduceAdapter({
          mock: false,
          value: {
            gender,
            age,
            likes,
          },
        }),
      ),
    [gender, age, likes],
  );
  return (
    <>
      <Dialog
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel='resultText'
        shouldCloseOnOverlayClick={false}
      >
        <React.Suspense fallback={<Loader />}>
          <Contents onClose={onClose} generateResource={generateResource} />
        </React.Suspense>
      </Dialog>
    </>
  );
};
