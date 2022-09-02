import { Box, Button, Flex, FormControl, Heading, Icon, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  return (

    <Flex
      w={'100%'}
      h={'70vh'}
      bg={'rgb(111,23,22)'}
      color={'white'}
      justify={'center'}>
        
<Heading mt={'20px'} position={'absolute'} >Contato</Heading>
      <Flex

        w={'50%'}
        align={'center'}
        justify={"center"}
        textAlign={"center"}
        flexDirection={'column'}>

        

        <Flex>
          <Flex gap={'10px'} flexDirection={'column'}>
            <Icon as={AiOutlineMail} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiFillInstagram} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiOutlineWhatsApp} h={'40px'} w={'40px'} mr={'10px'} />
            <Icon as={AiOutlineWhatsApp} h={'40px'} w={'40px'} mr={'10px'} />

          </Flex>

          <Flex gap={'15px'} flexDirection={'column'}>
            <Text fontSize={'24px'}>email@email.com</Text>
            <Text fontSize={'24px'}>@neoengenhariagbi</Text>
            <Text fontSize={'24px'}>+55 (77) 99903-0077</Text>
            <Text fontSize={'24px'}>+55 (77) 99174-8424</Text>
          </Flex>

        </Flex>

      </Flex>
      <Flex w={"50%"} flexDirection={'column'} align={'center'} justify={'center'} pt={'50px'}>
      
      <FormControl display={'flex'} flexDirection={'column'} gap={'10px'} w={'60%'} borderRadius={'10px'} alignItems={'center'}>
        <Input  bg={'white'} color={'black'} _placeholder={{color: 'black'}} type={'text'} placeholder='Nome'></Input>
        <Input bg={'white'} color={'black'} _placeholder={{color: 'black'}} type={'email'} placeholder='E-mail'></Input>
        <Input bg={'white'} color={'black'} _placeholder={{color: 'black'}} type={'number'} placeholder='Telefone'></Input>
        <Textarea bg={'white'} color={'black'} _placeholder={{color: 'black'}} placeholder='Sua mensagem aqui:' />
        <Button w={'30%'} colorScheme={'whatsapp'}>Enviar</Button>
      </FormControl>
      </Flex>
    </Flex>

  )
}

export default Contact