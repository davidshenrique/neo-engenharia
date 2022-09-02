import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ImageMission from '../images/img10.jpeg'

const Mission = () => {
    return (
        <Flex id='mission' w={'100%'} minH={'50vh'} mb={'50px'}>

            <Flex flexDirection={'column'} w={'50%'} align={'center'} justify={'center'}
            >
                <Image w={'50%'} src={ImageMission}></Image>
            </Flex>

            <Flex w={'50%'}
                flexDirection={'column'}
                align={'center'}
                justify={'center'}
                gap={'20px'}
                textAlign={'center'} p={'20px'}>
                <Heading
                    fontSize={'3xl'}
                    textTransform={'uppercase'}
                    color={'rgb(111,23,22)'}
                    p={'5px 10px 18px 10px'}
                    textShadow={'1px 1px 1px #000000a0'}>

                    UMA NOVA FORMA DE REALIZAR PROJETOS
                    
                </Heading>
                <Text fontSize={'1.2rem'}>


                    Somos especialistas em transformar sonhos  em realidade!  Através dos nossos projetos e execuções de obras, fazemos com que todos os detalhes sejam pensados e executados para que se torne possível esse momento tão especial para nossos clientes e amigos.
                    <br /><br />
                    Nós criamos seu verdadeiro sonho, seja ele sua casa ou sua empresa. Realizamos a execução do seu tão esperado momento.
                </Text>
                <Button border={'1px solid #000000a0'} textShadow={'2px 2px 2px #000000a0'} boxShadow={'2px 2px 2px #000000a0'} size={'lg'} fontSize={'24px'} colorScheme={'whatsapp'}>Agendar Consultoria Gratuita</Button>
            </Flex>

        </Flex>
    )
}

export default Mission