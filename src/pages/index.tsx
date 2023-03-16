import React from 'react'
import styled from 'styled-components'
import { CommonHead } from '@/common/meta/CommonHead'
import Image from 'next/image'
export default function Home() {

  return (
    <>
      <CommonHead />
      <div>
        <Test>
          gptの混乱
        </Test>

        <Image height={300} width={300} src='/eringi-min.png' alt='eringi' />
      </div>
    </>
  )
}

const Test = styled.p`
  color: red;
`
