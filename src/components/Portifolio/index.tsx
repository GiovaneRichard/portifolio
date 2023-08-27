import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Apresentation } from '../Apresentation'
import { About } from '../About'
import { Services } from '../Sevices'
import { ExperienceAndEducation } from '../ExperienceAndEducation'
import { Skills } from '../Skills'
import { Contact } from '../Contact'

export const Portifolio = () => {
  return (
    <VStack>
      <Apresentation />
      <About />
      <Services />
      <Skills />
      <ExperienceAndEducation />
      <Contact />
    </VStack>
  )
}
