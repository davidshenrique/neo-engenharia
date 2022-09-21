import { Divider, Flex, Heading, Icon, List, ListItem, Text } from '@chakra-ui/react'
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
                mt={'2.5%'}
                mb={'4.5%'}
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
                align={'flex-start'}
            >

                <Flex
                    w={'25%'}
                    h={'fit-content'}
                    alignItems={'center'}
                    direction={'column'}
                    textAlign={'center'}
                    rowGap={'20px'}>

                    <Icon as={FaDraftingCompass} w={'75px'} h={'75px'} color={'rgb(111,23,22)'} />
                    <Text fontSize={'3xl'}>Projetos</Text>
                    <List fontSize={'20px'}>
                        <ListItem>
                            Projeto arquitetônico
                        </ListItem>
                        <ListItem>
                            Projeto estrutural
                        </ListItem>
                        <ListItem>
                            Projeto elétrico de baixa e alta tensão
                        </ListItem>
                        <ListItem>
                            Hidrossanitário
                        </ListItem>
                        <ListItem>
                            Detalhamento 3D de fachada e interiores
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    w={'25%'}
                    h={'fit-content'}
                    alignItems={'center'}
                    direction={'column'}
                    textAlign={'center'}
                    rowGap={'20px'}>
                    <Icon as={FaHouzz} w={'75px'} h={'75px'} color={'rgb(111,23,22)'} />
                    <Text fontSize={'3xl'}>Execução de obras</Text>
                    
                        <List fontSize={'20px'}>
                        <ListItem>
                        Edificação de obras públicas
                        </ListItem>
                        <ListItem>
                        Edificação de obras privadas
                        </ListItem>
                        <ListItem>
                            Reformas com excelência e qualidade
                        </ListItem>
                        <ListItem>
                            Acompanhamento de obras
                        </ListItem>
                        <ListItem>
                            Fiscalização de obras
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    w={'25%'}
                    h={'fit-content'}
                    alignItems={'center'}
                    direction={'column'}
                    textAlign={'center'}
                    rowGap={'20px'}>
                    <Icon as={FaScroll} w={'75px'} h={'75px'} color={'rgb(111,23,22)'} />
                    <Text fontSize={'3xl'}>Planilhas orçamentárias</Text>
                    <List fontSize={'20px'}>
                        <ListItem>
                        Orçamento detalhado de sua obra
                        </ListItem>
                        <ListItem>
                        Sintetização dos preços unitários
                        </ListItem>
                        <ListItem>
                            Composição de preços
                        </ListItem>
                        <ListItem>
                            Cronograma Físico-Financeiro
                        </ListItem>
                        <ListItem>
                            Relatório fotográfico e memorial descritivo
                        </ListItem>
                    </List>
                </Flex>

            </Flex>


        </Flex>
    )
}

export default Services