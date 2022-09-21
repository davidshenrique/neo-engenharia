import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text
} from '@chakra-ui/react'
import React from 'react'
import ImageMission from '../images/img10.jpeg'

const Mission = () => {
    return (
        <Flex
            id='mission'
            w={'100%'}
            h={{base: 'full', md: '60vh', lg: '60vh'}}
            flexDirection={{base: 'column', md: 'row', lg: 'row'}}
            mt={{base: '50px', md: '0', lg: '0'}}
            mb={{base: '75px', md: '0', lg: '0'}}
        >
            <Flex
                flexDirection={'column'}
                w={{base: '100%', md: '50%', lg: '50%'}}
                align={'center'}
                justify={'center'}
            >
                <Image
                    w={{base: '100%', md: '50%', lg: '50%'}}
                    src={ImageMission}
                />
            </Flex>
            <Flex
                w={{base: '100%', md: '50%', lg: '50%'}}
                flexDirection={'column'}
                align={'center'}
                justify={'center'}
                gap={'20px'}
                textAlign={'center'}
                p={{base: '0', md: '20px', lg: '20px'}}
            >
                <Heading
                    fontSize={'3xl'}
                    textTransform={'uppercase'}
                    color={'rgb(111,23,22)'}
                    p={'5px 10px 18px 10px'}
                    textShadow={'1px 1px 1px #000000a0'}
                    mt={{base: '25px', md: '0', lg: '0'}}
                >
                    UMA NOVA FORMA DE REALIZAR PROJETOS
                </Heading>
                <Text
                    fontSize={'1.4rem'}
                >
                    A neo engenharia vem em alto crescimento no mercado de Guanambi e Região, com mais de
                    30 obras executadas, sendo elas: residenciais, empresariais e públicas com qualidade
                    e excelência sendo referência no ramo de engenharia.
                </Text>
                <Link
                    href='https://api.whatsapp.com/send?phone=5577999030077'
                >
                    <Button
                        border={'1px solid #000000a0'}
                        textShadow={'2px 2px 2px #000000a0'}
                        boxShadow={'2px 2px 2px #000000a0'}
                        size={'lg'} fontSize={'24px'}
                        colorScheme={'whatsapp'}
                    >
                        Agendar Consultoria Gratuita</Button>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Mission