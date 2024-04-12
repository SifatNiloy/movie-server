import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Tailwind, Link, Preview } from '@react-email/components'
const WelcomeTemplate = ({name}:{name: string}) => {
  return (
    <Html>
        <Preview>
            Welcome abord
        </Preview>
        <Tailwind>
            <Body className='bg-white'>
                <Container>
                    <Text className='font-bold text-3xl' >Hello {name} </Text>
                    <Link href='https://sifatniloy.top'>sifatniloy.top</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
const body: CSSProperties= {
    background: '#fff',
}
const heading: CSSProperties= {
    fontSize: '32px',
}

export default WelcomeTemplate