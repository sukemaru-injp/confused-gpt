import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Select } from '@/common/ui/Select';
import { genderOptions, GenderType } from '@/model/Gender';
import { spacings } from '@/common/ui/styles';
import { Button } from '@/common/ui/Button';
import { FormItem } from '@/common/ui/FormItem';
import { Input } from '@/common/ui/Input';

export const Form = (): JSX.Element => {
  const [select, setSelect] = useState<GenderType>(genderOptions[0].value);

  const [age, setAge] = useState<number>(20);

  const handleChangeAge = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const val = Number(e.target.value);
    setAge(val);
  }, []);

  const handleChange = useCallback((v: GenderType) => {
    setSelect(v);
  }, []);

  const handleClick = useCallback(() => {
    console.log('onClick:', select);
  }, [select]);

  return (
    <FormWrapper>
      <Span>簡単にプロフィールを入力してください↓</Span>
      <FormItem label='性別'>
        <Select options={genderOptions} onChange={handleChange} />
      </FormItem>

      <FormItem label='年齢'>
        <Input value={age} onChange={handleChangeAge} type='number' />
      </FormItem>

      <FormItem label='好きなもの'><p>likes</p></FormItem>
      <Button onClick={handleClick}>自己紹介を生成する</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: ${spacings.M};
`;
const Span = styled.span`
  padding: ${spacings.XS} 0;
`;
