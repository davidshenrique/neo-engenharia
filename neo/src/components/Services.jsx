import { Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaScroll, FaHouzz, FaDraftingCompass } from "react-icons/fa";


const Services = () => {

    return (
        <Flex id='services' h={'75vh'} w={'100%'} direction={'column'} align={'center'} justify={'center'}
        >

            <Heading 
            fontFamily={'Roboto'}
            fontWeight={'bold'} 
            textTransform={'uppercase'} 
            mT={'50px'} mt={'2.5%'} 
            color={"rgb(111,23,22)"} 
            p={'5px 10px 5px 10px'}
            textShadow={'1px 1px 1px #000000a0'} 
            >
                Nossos serviços
            </Heading>
            
            <Flex 
            w={'100%'} 
            h={'100%'} 
            justify={'center'}
            columnGap={'50px'} 
            align={'center'} 
            >

                <Flex 
                w={'25%'} 
                h={'fit-content'} 
                alignItems={'center'} 
                direction={'column'} 
                textAlign={'center'}
                rowGap={'20px'}>
                    
                    <Icon as={FaDraftingCompass} w={'75px'} h={'75px'} color={'rgb(111,23,22)'} />
                    <Text fontSize={'3xl'}>Projetos personalizados</Text>
                    <Text fontSize={'1.2rem'}>Projetos sob demanda de casas ou empreendimentos com nosso time de especialistas. Desde lares até empreendimentos completos.</Text>
                </Flex>
                <Flex 
                w={'25%'} 
                h={'fit-content'} 
                alignItems={'center'} 
                direction={'column'} 
                textAlign={'center'}
                rowGap={'20px'}>
                    <Icon as={FaHouzz} w={'75px'} h={'75px'} color={'rgb(111,23,22)'} />
                    <Text fontSize={'3xl'}>Execução de obra</Text>
                    <Text fontSize={'1.2rem'}>Execução de projetos onde contamos com uma equipe dedicada, que, ao colocar a mão na massa, seu sonho sairá do papel em perfeitos detalhes.</Text>
                </Flex>
                <Flex  
                w={'25%'} 
                h={'fit-content'} 
                alignItems={'center'} 
                direction={'column'} 
                textAlign={'center'}
                rowGap={'20px'}>
                    <Icon as={FaScroll} w={'75px'} h={'75px'} color={'rgb(111,23,22)'}/>
                    <Text fontSize={'3xl'}>Planilhas orçamentárias</Text>
                    <Text fontSize={'1.2rem'}>Planilhas orçamentárias personalizadas para sua obra. Transparência em todos os serviços e suas respectivas unidades de medidas, quantidades e preços unitários.</Text>
                </Flex>

            </Flex>
            

        </Flex>
    )
}

export default Services