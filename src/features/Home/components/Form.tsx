import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Resource } from "@/utils";
import { HelloAdapter } from "@/utils/adapter/helloAdapter";
import { Select } from "@/common/ui/Select";
import { zodiacOptions, ZodiacType } from "@/model/Zodiac";

export const Form = (): JSX.Element => {
  const [select, setSelect] = useState<ZodiacType>(zodiacOptions[0].value)

  const handleChange = useCallback((v: ZodiacType) => {
    setSelect(v)
  }, [])

  return (
    <FormWrapper>
      <Select options={zodiacOptions} onChange={handleChange} width="200px" />
    </FormWrapper>
  )
}
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
