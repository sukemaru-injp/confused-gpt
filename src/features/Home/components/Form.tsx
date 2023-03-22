import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Select } from '@/common/ui/Select';
import { genderOptions, GenderType } from '@/model/Gender';
import { spacings } from '@/common/ui/styles';
import { Button } from '@/common/ui/Button';

export const Form = (): JSX.Element => {
  const [select, setSelect] = useState<GenderType>(genderOptions[0].value);

  const handleChange = useCallback((v: GenderType) => {
    setSelect(v);
  }, []);

  const handleClick = useCallback(() => {
    console.log('onClick:', select)
  }, [select]);

  return (
    <FormWrapper>
      <Span>簡単にプロフィールを入力してください↓</Span>
      <Select options={genderOptions} onChange={handleChange} width='210px' />
      <Button onClick={handleClick}>自己紹介を生成する</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacings.M};
`;
const Span = styled.span`
  padding: ${spacings.XS} 0;
`;
