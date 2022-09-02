import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import Logo from '../images/img10.jpeg'

const Header = () => {
  return (
    <Flex w={'100%'} h={'10vh'} bg={'white'} position={'relative'} fontSize={'22px'} fontWeight={'medium'}>
        <Image src={Logo} h={'100%'} position={'absolute'}/>
        <Flex display={{base: 'none', md: 'flex', lg: 'flex'}} justify={'center'} align={'center'} w={'100%'} gap={'5%'}>
        <Text _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Home</Text>
        <Text _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Quem somos</Text>
        <Text _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Projetos</Text>
        <Text _hover={{textDecoration: 'underline', color: '#222222', cursor: 'pointer'}}>Contato</Text>
        </Flex>
    </Flex>
  )
}

export default Header