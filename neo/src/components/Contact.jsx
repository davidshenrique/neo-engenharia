import { Box, Button, Flex, FormControl, Heading, Icon, Input, Link, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

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

        w={'50%'}
        align={'center'}
        justify={"center"}
        textAlign={"center"}
        flexDirection={'column'}>
        <Heading mb={'20px'}>Contato</Heading>
        <Flex>

          <Flex gap={'10px'} flexDirection={'column'}>
            <Icon as={AiOutlineMail} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiFillInstagram} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiOutlineWhatsApp} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiOutlineWhatsApp} h={'40px'} w={'40px'} mr={'10px'} />

          </Flex>

          <Flex gap={'15px'} flexDirection={'column'}>
            <Link href='mailto: neo.engconstrucoes@gmail.com'>
              <Text fontSize={'24px'}>Contatar por e-mail</Text>
            </Link>
            <Link href='https://www.instagram.com/neoengenhariagbi/'>
              <Text fontSize={'24px'}>@neoengenhariagbi</Text>
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=5577999030077'>
              <Text fontSize={'24px'}>+55 (77) 99903-0077</Text>
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=5577991748424'>
              <Text fontSize={'24px'}>+55 (77) 99174-8424</Text>
            </Link>
          </Flex>

        </Flex>

      </Flex>
    </Flex>

  )
}

export default Contact