import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BgImage from '../images/img7.jpeg'

const Hero = () => {
    return (
        <Flex flexDirection={'column'} w={'100%'} h={'90vh'} bg={'red'} bgImage={BgImage} bgPosition={'bottom'}>

            <Flex flexDirection={'column'} justify={'center'} h={'100%'} bg={'blackAlpha.700'} paddingLeft={'3%'}>
                <VStack display={'flex'} w={'40%'} justify={'center'} align={'center'}>
                    <Heading color={'aliceblue'} fontSize={'7xl'}>
                        NEO Engenharia
                    </Heading>
                    <Text color={'aliceblue'} fontSize={'3xl'}>
                        Soluções modernas para construções
                    </Text>
                    <br/><br/>
                    <Button w={'250px'} h={'50px'} fontSize={'20px'} fontWeight={'bold'} colorScheme={'red'}>
                        Orçamento
                    </Button>
                </VStack>
            </Flex>


        </Flex>
    )
}

export default Hero