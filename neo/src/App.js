import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Projects from './components/Projects'
import Services from './components/Services'
import Zap from './images/zap.png'

const App = () => {
  return (
    
      <Flex flexDirection={'column'} alignItems={'center'} fontFamily={'Roboto'}>
        <Image src={Zap} position={'fixed'} bottom={'0'} right={'0'} h={'10%'} m={'10px'} _hover={{h: '12%'}} cursor={'pointer'} zIndex={'99'}/>
        <Header linkServices='#services' linkProjects='#projects' linkMission='#mission'/>
        <Hero/>
        <Services/>
        <Projects/>
        <Mission/>
        <Contact/>
      </Flex>
    
  )
}

export default App