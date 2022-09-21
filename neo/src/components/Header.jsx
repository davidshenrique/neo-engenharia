import React from 'react'
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button
} from '@chakra-ui/react'
import { FaAngleDoubleDown } from "react-icons/fa"
import Logo from '../images/img10.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = (props) => {
  return (
    <Flex
      w={'100%'}
      h={'10vh'}
      bg={'white'}
      position={'relative'}
      fontSize={'22px'}
      fontWeight={'medium'}
    >
      <Image
        src={Logo}
        h={'100%'}
        position={'absolute'}
      />
      <Flex
        display={{ base: 'none', md: 'flex', lg: 'flex' }}
        justify={'center'}
        align={'center'}
        w={'100%'}
        gap={'5%'}
      >
        <AnchorLink
          href={props.linkServices}
        >
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Serviços
          </Text>
        </AnchorLink>
        <AnchorLink
          href={props.linkProjects}>
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Obras
          </Text>
        </AnchorLink>
        <AnchorLink
          href={props.linkProducts}>
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Produtos
          </Text>
        </AnchorLink>
        <AnchorLink
          href={props.linkTeam}
        >
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Nosso Time
          </Text>
        </AnchorLink>
        <AnchorLink
          href={props.linkMission}>
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Sobre Nós
          </Text>
        </AnchorLink>
        <AnchorLink
          href={props.linkContact}
        >
          <Text
            color={'rgb(111,23,22)'}
            _hover={{ textDecoration: 'underline', color: '#222222', cursor: 'pointer' }}
          >
            Contato
          </Text>
        </AnchorLink>
      </Flex>
      <Menu
      display={{base: '', md: 'none', lg: 'none'}}
      >
        <MenuButton
        display={{base: 'flex', md: 'none', lg: 'none'}}
        m={'auto 10px auto auto'}
        bg={'rgb(111,23,22)'}
        _active={{bg: 'rgb(111,23,22)'}}
        _focus={{bg:'rgb(111,23,22)'}}
        _hover={{bg:'#470908'}}
        _expanded={{ bg: 'rgb(111,23,22)' }}
        color={"white"}
        as={Button} 
        rightIcon={<FaAngleDoubleDown />}
        >
          Menu
        </MenuButton>
        <MenuList
        bg={'rgb(111,23,22)'}
        color={'white'}
        >
          <AnchorLink
          href={props.linkServices}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Serviços
            </MenuItem>
          </AnchorLink>
          <AnchorLink
          href={props.linkProjects}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Obras
            </MenuItem>
          </AnchorLink>
          <AnchorLink
          href={props.linkProducts}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Produtos
            </MenuItem>
          </AnchorLink>
          <AnchorLink
          href={props.linkTeam}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Nosso Time
            </MenuItem>
          </AnchorLink>
          <AnchorLink
          href={props.linkMission}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Sobre Nós
            </MenuItem>
          </AnchorLink>
          <AnchorLink
          href={props.linkContact}
        >
          <MenuItem 
          _active={{bg: '#470908'}}
          _focus={{bg:'#470908'}}
          _hover={{bg:'#470908'}}
          _expanded={{ bg: '#470908' }}
          >
            Contato
            </MenuItem>
          </AnchorLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header