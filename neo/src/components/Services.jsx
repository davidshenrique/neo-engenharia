import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaScroll, FaHouzz, FaDraftingCompass } from "react-icons/fa";

const Services = () => {

    return (
        <Flex h={'50vh'} w={'100%'} direction={'column'} align={'center'}>

            <Heading mT={'50px'} mt={'2.5%'}>
                Alguns dos nossos serviços
            </Heading>
            <Flex w={'100%'} h={'100%'} justify={'center'} gap={'10%'} pt={'2.5%'}>

                <Flex maxW={'25%'} alignItems={'center'} direction={'column'}>
                    <Icon as={FaHouzz} w={'75px'} h={'75px'} />
                    <Text fontSize={'3xl'}>Execução de obra</Text>
                </Flex>
                <Flex maxW={'25%'} alignItems={'center'} direction={'column'}>
                    <Icon as={FaScroll} w={'75px'} h={'75px'} />
                    <Text fontSize={'3xl'}>Planilhas orçamentárias</Text>
                </Flex>
                <Flex maxW={'25%'} alignItems={'center'} direction={'column'}>
                    <Icon as={FaDraftingCompass} w={'75px'} h={'75px'} />
                    <Text fontSize={'3xl'}>Projetos personalizados</Text>
                </Flex>

            </Flex>

        </Flex>
    )
}

export default Services