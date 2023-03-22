import React from 'react';
import styled from 'styled-components';
import { spacings, colors } from '../styles';

type Props = {
  children: React.ReactNode;
  label: string;
};

export const FormItem = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      {props.children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.XS};
`;
const Label = styled.span`
  color: ${colors.gray};
  min-width: 85px;
`;
