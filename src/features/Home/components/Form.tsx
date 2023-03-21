import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Select } from '@/common/ui/Select';
import { zodiacOptions, ZodiacType } from '@/model/Zodiac';
import { spacings } from '@/common/ui/styles';
import { Button } from '@/common/ui/Button';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

export const Form = (): JSX.Element => {
  const [select, setSelect] = useState<ZodiacType>(zodiacOptions[0].value);
  const router = useRouter();

  const handleChange = useCallback((v: ZodiacType) => {
    setSelect(v);
  }, []);

  const handleClick = useCallback(() => {
    router.push({
      pathname: `/fortune/${select}`,
      query: { date: format(new Date(), 'yyyyMMdd') },
    });
  }, [router, select]);

  return (
    <FormWrapper>
      <Span>星座を選択してください↓</Span>
      <Select options={zodiacOptions} onChange={handleChange} width='200px' />
      <Button onClick={handleClick}>占いを見る</Button>
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
`