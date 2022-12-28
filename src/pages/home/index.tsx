import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento Descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          quality={100}
          priority
          src={previewImage}
          alt="Imagem de exemplo do calendário da aplicação"
        />
      </Preview>
    </Container>
  )
}
