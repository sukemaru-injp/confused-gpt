import Head from 'next/head'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import { CommonHead } from '@/common/meta/CommonHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <CommonHead />
      <div>
        <Test>
          gptの混乱
        </Test>
      </div>
    </>
  )
}

const Test = styled.p`
  color: red;
`
