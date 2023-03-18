import React from 'react';
import { Resource } from '@/utils';
import { FortuneAdapter } from '@/utils/adapter/generateFortuneAdapter';
import { Failed } from '../Failed';

type Props = {
  fortuneResource: Resource<FortuneAdapter>;
};

export default function FortuneContainer({ fortuneResource }: Props): JSX.Element {
  const result = fortuneResource.read();

  if (result.isErr()) {
    return <Failed />;
  }

  console.log('result:', result.value);

  return <></>;
}
