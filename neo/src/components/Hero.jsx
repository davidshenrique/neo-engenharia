import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BgImage from '../images/img7.jpeg'

const Hero = () => {
    return (
        <Flex  overflow={'hidden'} flexDirection={'column'} w={'100%'} h={'90vh'} bgImage={BgImage} bgPosition={'bottom'}>

            <Flex flexDirection={'column'} justify={'center'} h={'100%'} bg={'blackAlpha.700'} paddingLeft={'3%'}>
                <VStack display={'flex'} w={'40%'} justify={'center'} align={'center'}>
                    <Heading color={'aliceblue'} fontSize={'7xl'} textShadow={'2px 2px 2px rgb(111,23,22)'}>
                        NEO Engenharia
                    </Heading>
                    <Text color={'aliceblue'} fontSize={'3xl'} >
                        Soluções modernas para construções
                    </Text>
                    <br/>
                    <Button border={'1px solid #000000a0'} textShadow={'2px 2px 2px #000000a0'} boxShadow={'2px 2px 2px #000000a0'} size={'lg'} fontSize={'24px'} fontWeight={'bold'} colorScheme={'whatsapp'}>
                        Orçamento
                    </Button>
                </VStack>
            </Flex>


        </Flex>
    )
}

export default Hero