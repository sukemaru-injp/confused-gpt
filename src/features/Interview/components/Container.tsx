import React from "react";
import { Resource } from '@/utils';
import { InterviewAdapter } from "@/utils/adapter/generateInterviewAdapter";
import { Failed } from "@/features/Failed";

type Props = {
  resource: Resource<InterviewAdapter>
}
export const Container: React.FC<Props> = ({
  resource,
}) => {
  const interviewRes = resource.read()

  if (interviewRes.isErr()) {
    return <Failed />;
  }

  return (
    <>
      <p>{interviewRes.value.data.text}</p>
    </>
  )
}