import React from "react";
import styled from "styled-components";
import { spacings } from "@/common/ui/styles";
import { mediaQuery } from "@/common/ui/styles/mixin";
import { Form } from "./Form";
import Image from "next/image";

export const MainSection = () => {
  return (
    <Wrapper>
      <Form />
      <ImageWrapper>
        <Image height={300} width={300} src='/eringi-min.png' alt='eringi' />
      </ImageWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacings.M};
  padding: ${spacings.S};

  ${mediaQuery(`
    flex-direction: column;
  `, 'spOnly')}
`

const ImageWrapper = styled.div`
`