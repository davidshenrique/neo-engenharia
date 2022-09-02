import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Zap from './images/zap.png'

const App = () => {
  return (
    
      <Flex flexDirection={'column'}>
        <Image src={Zap} position={'fixed'} bottom={'0'} right={'0'} h={'10%'} m={'10px'}/>
        <Header/>
        <Hero/>
        <Services/>
      </Flex>
    
  )
}

export default App