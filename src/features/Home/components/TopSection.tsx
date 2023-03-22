import React from 'react';
import styled from 'styled-components';
import { colors, spacings } from '@/common/ui/styles';
import { mediaQuery } from '@/common/ui/styles/mixin';

export const TopSection = () => {
  return (
    <Wrapper>
      <h3>OpenAI搭載のエリンギが自己紹介で使えそうな文章を生成します</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 350px;
  width: 100%;
  background-image: url('/kinoko.jpg');
  background-position: bottom -100px left;
  background-size: cover;
  color: ${colors.white};
  padding: ${spacings.L};

  ${mediaQuery(
    `
    height: 280px;
    background-position: center;
    padding: ${spacings.M};
  `,
    'spOnly',
  )}
`;
