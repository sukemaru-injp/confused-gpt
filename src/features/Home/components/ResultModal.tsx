import React, { useMemo } from 'react';
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

type ViewProps = {
  text: string;
  onClose: () => void;
};

const ContentsView: React.FC<ViewProps> = ({ text, onClose }) => {
  return (
    <>
      <Title>自己紹介</Title>

      <p>{text}</p>

      <Lower>
        <CloseButton onClick={() => onClose()}>閉じる</CloseButton>
      </Lower>
    </>
  );
};
const Lower = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacings.L};
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
          mock: true,
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
        <React.Suspense fallback={<p>Loading...</p>}>
          <Contents onClose={onClose} generateResource={generateResource} />
        </React.Suspense>
      </Dialog>
    </>
  );
};
