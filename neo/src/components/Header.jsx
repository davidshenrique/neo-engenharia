import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import Logo from '../images/img10.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = (props) => {
  return (
    <Flex w={'100%'} h={'10vh'} bg={'white'} position={'relative'} fontSize={'22px'} fontWeight={'medium'}>
        <Image src={Logo} h={'100%'} position={'absolute'}/>
        <Flex display={{base: 'none', md: 'flex', lg: 'flex'}} justify={'center'} align={'center'} w={'100%'} gap={'5%'}>

        <AnchorLink href={props.linkServices}>
        <Text color={'rgb(111,23,22)'} _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Serviços</Text>
        </AnchorLink>

        <AnchorLink href={props.linkProjects}>
        <Text color={'rgb(111,23,22)'} _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Projetos</Text>
        </AnchorLink>

        <AnchorLink href={props.linkMission}>
        <Text color={'rgb(111,23,22)'} _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Sobre</Text>
        </AnchorLink>

        <AnchorLink href={props.link}>
        <Text color={'rgb(111,23,22)'} _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Contato</Text>
        </AnchorLink>

        </Flex>
    </Flex>
  )
}

export default Header