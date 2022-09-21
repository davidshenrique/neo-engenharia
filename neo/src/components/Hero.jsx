import { Button, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BgImage from '../images/img7.jpeg'

const Hero = () => {
    return (
        <Flex
            overflow={'hidden'}
            flexDirection={'column'}
            w={'100%'} h={'90vh'}
            bgImage={BgImage}
            bgPosition={'bottom'}
        >

            <Flex
                flexDirection={'column'}
                justify={'center'}
                h={'100%'}
                bg={'blackAlpha.700'}
                paddingLeft={'3%'}
            >
                <VStack
                    display={'flex'}
                    w={'40%'}
                    justify={'center'}
                    align={'center'}
                >
                    <Heading
                        color={'aliceblue'}
                        fontSize={'7xl'}
                        textShadow={'2px 2px 2px rgb(111,23,22)'}
                    >
                        NEO Engenharia
                    </Heading>
                    <Text
                        color={'aliceblue'}
                        fontSize={'3xl'}
                    >
                        Construindo com confiança e qualidade!
                    </Text>
                    <br />
                    <Link href='https://api.whatsapp.com/send?phone=5577999030077'>
                    <Button
                        border={'1px solid #000000a0'}
                        textShadow={'2px 2px 2px #000000a0'}
                        boxShadow={'2px 2px 2px #000000a0'}
                        size={'lg'} fontSize={'24px'}
                        fontWeight={'bold'}
                        bg={'rgb(111,23,22)'}
                        color={'white'}
                        _hover={{bg: '#4d0c0b'}}
                        _active={{bg: '#3b0605'}}
                        >
                        Orçamento
                    </Button>
                        </Link>
                </VStack>
            </Flex>


        </Flex>
    )
}

export default Hero