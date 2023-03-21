import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Select } from '@/common/ui/Select';
import { jobOptions, JobType } from '@/model/JobModel';
import { spacings } from '@/common/ui/styles';
import { Button } from '@/common/ui/Button';
import { useRouter } from 'next/router';

export const Form = (): JSX.Element => {
  const [select, setSelect] = useState<JobType>(jobOptions[0].value);
  const router = useRouter();

  const handleChange = useCallback((v: JobType) => {
    setSelect(v);
  }, []);

  const handleClick = useCallback(() => {
    router.push({
      pathname: `/interview/${select}`,
    });
  }, [router, select]);

  return (
    <FormWrapper>
      <Span>採用したい職種↓</Span>
      <Select options={jobOptions} onChange={handleChange} width='210px' />
      <Button onClick={handleClick}>質問を生成する</Button>
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
