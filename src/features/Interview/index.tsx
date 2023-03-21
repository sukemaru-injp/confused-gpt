import React, { useMemo } from "react";
import { JobType } from "@/model/JobModel";
import { resource } from '@/utils';
import { generateInterviewAdapter } from "@/utils/adapter/generateInterviewAdapter";
import { Container } from "./components/Container";

type Props = {
  job: JobType
}
export const InterView: React.FC<Props> = ({ job }) => {
  const interviewResource = useMemo(() => {
    return resource(generateInterviewAdapter({ job, mock: true }))
  }, [job])

  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Container resource={interviewResource} />
      </React.Suspense>
    </>
  )
}
