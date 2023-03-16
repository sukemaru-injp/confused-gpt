import React from "react";
import { Resource } from "@/utils";
import { HelloAdapter } from "@/utils/adapter/helloAdapter";

type Props = {
  helloResource: Resource<HelloAdapter>
}

const HomeFeature: React.FC<Props> = ({
  helloResource
}) => {
  const test = helloResource.read()
  if (test.isErr()) {
    return <p>isErr</p>
  }
  return (
    <p>{test.value.text}</p>
  )
}

export default HomeFeature
