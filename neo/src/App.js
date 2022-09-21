import {
  Flex,
  Image,
  Link
} from '@chakra-ui/react'
import React from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Products from './components/Products'
import Projects from './components/Projects'
import Services from './components/Services'
import Team from './components/Team'
import Zap from './images/zap.png'

const App = () => {
  return (

    <Flex
      overflow={'hidden'}
      flexDirection={'column'}
      alignItems={'center'}
      fontFamily={'Roboto'}
    >
      <Link
        href='https://api.whatsapp.com/send?phone=5577999030077'
      >
        <Image
          src={Zap}
          position={'fixed'}
          bottom={'0'}
          right={'0'}
          h={'10%'}
          m={'10px'}
          _hover={{ h: '12%' }}
          cursor={'pointer'}
          zIndex={'99'}
        />
      </Link>
      <Header
        linkServices='#services'
        linkProjects='#projects'
        linkProducts='#products'
        linkTeam='#team'
        linkMission='#mission'
        linkContact='#contact'
      />
      <Hero />
      <Services />
      <Projects />
      <Products />
      <Team />
      <Mission />
      <Contact />
    </Flex>
  )
}

export default App