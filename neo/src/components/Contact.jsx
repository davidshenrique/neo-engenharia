import {
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from '@chakra-ui/react'
import React from 'react'
import {
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineWhatsApp
} from 'react-icons/ai'

const Contact = () => {
  return (

    <Flex
      id='contact'
      w={'100%'}
      h={'45vh'}
      bg={'rgb(111,23,22)'}
      boxShadow={'2px 2px 15px 2px #0000007d'}
      color={'white'}
      justify={'center'}>
      <Flex
        w={{base: '100%', md: '50%', lg: '50%'}}
        align={'center'}
        justify={"center"}
        flexDirection={'column'}
        ml={{base: '0', md: '75px', lg: '75px'}}
      >
        <Heading
          mb={'20px'}
          ml={{base: '0', md: '-75px', lg: '-75px'}}
          fontFamily={'Roboto'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        color={'aliceblue'}
        textShadow={'2px 2px 2px #000000a0'}
        >
          Contato
        </Heading>
        <Flex>
          <Flex
            gap={'10px'}
            flexDirection={'column'}
          >
            <Icon
              as={AiOutlineMail}
              h={'40px'}
              w={'40px'}
              mr={'10px'}
            />
            <Icon
              as={AiFillInstagram}
              h={'40px'}
              w={'40px'}
              mr={'10px'}
            />
            <Icon
              as={AiOutlineWhatsApp}
              h={'40px'}
              w={'40px'}
              mr={'10px'}
            />
            <Icon
              as={AiOutlineWhatsApp}
              h={'40px'}
              w={'40px'}
              mr={'10px'}
            />
          </Flex>
          <Flex
            gap={{base: '22px', md: '15px', lg: '15px'}}
            flexDirection={'column'}
          >
            <Link
              href='mailto: neo.engconstrucoes@gmail.com'
            >
              <Text
                fontSize={{base: '20px', md: '24px', lg: '24px'}}
              >
                neo.engconstrucoes@gmail.com
              </Text>
            </Link>
            <Link
              href='https://www.instagram.com/neoengenhariagbi/'
            >
              <Text
                fontSize={{base: '20px', md: '24px', lg: '24px'}}
              >
                @neoengenhariagbi
              </Text>
            </Link>
            <Link
              href='https://api.whatsapp.com/send?phone=5577999030077'
            >
              <Text
                fontSize={{base: '20px', md: '24px', lg: '24px'}}
              >
                +55 (77) 99903-0077
              </Text>
            </Link>
            <Link
              href='https://api.whatsapp.com/send?phone=5577991748424'
            >
              <Text
                fontSize={{base: '20px', md: '24px', lg: '24px'}}>
                +55 (77) 99174-8424
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact