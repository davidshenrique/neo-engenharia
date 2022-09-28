import {
    Flex,
    Heading,
    Image,
    List,
    ListItem
} from '@chakra-ui/react'
import React from 'react'
import img1 from '../images/img1.jpeg'
import img3 from '../images/img3.jpeg'

const Team = () => {
    return (
        <Flex
            id='team'
            bg={'rgb(111,23,22)'}
            boxShadow={'2px 2px 15px 2px #0000007d'}
            h={{ base: 'full', md: '80vh', lg: '80vh' }}
            w={'100%'}
            flexDirection={'column'}
            align={'center'}
            justify={'center'}
            p={'30px 10px 10px 10px'}
        >
            <Heading
                fontFamily={'Roboto'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                color={'aliceblue'}
                p={'5px 10px 5px 10px'}
                mt={{ base: '10px', md: '50px', lg: '50px' }}
                mb={{ base: '10px', md: '0', lg: '0' }}
                textShadow={'2px 2px 2px #000000a0'}
                borderRadius={'20px 20px 0 0'}
            >
                Profissionais
            </Heading>
            <Flex
                w={'100%'}
                h={'100%'}
                justify={'center'}
                align={'center'}
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
            >
                <Flex
                    flexDirection={'column'}
                    w={{ base: '100%', md: '50%', lg: '50%' }}
                    h={'100%'}
                    align={'center'}
                    textAlign={'center'}
                    p={'20px'}
                >
                    <Flex
                        w={'100%'}
                        h={'50%'}
                        mb={'20px'}
                        justify={'center'}
                    >
                        <Image
                            src={img1}
                            border={'1px solid black'}
                            borderRadius={'100%'}
                        />
                    </Flex>
                    <Flex
                        w={'100%'}
                        justify={'center'}
                    >
                        <List
                            color={'white'}
                            fontSize={'20px'}
                        >
                            <ListItem
                                fontWeight={'bold'}
                            >
                                GABRIEL SILVEIRA NEVES
                            </ListItem>
                            <ListItem>
                                ENGENHEIRO CIVIL
                            </ListItem>
                            <ListItem>
                                CREA: 3000105750BA
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection={'column'}
                    w={{ base: '100%', md: '50%', lg: '50%' }}
                    h={'100%'}
                    align={'center'}
                    textAlign={'center'}
                    p={'20px'}
                >
                    <Flex
                        w={'100%'}
                        h={'50%'}
                        mb={'20px'}
                        justify={'center'}
                    >
                        <Image
                            src={img3}
                            border={'1px solid black'}
                            borderRadius={'100%'}
                        />
                    </Flex>
                    <Flex
                        w={'100%'}
                        justify={'center'}
                    >
                        <List
                            color={'white'}
                            fontSize={'20px'}
                        >
                            <ListItem
                                fontWeight={'bold'}
                            >
                                SANDRO ALEX M. CARVALHO
                            </ListItem>
                            <ListItem>
                                ENGENHEIRO CIVIL
                                <br />
                                PÓS-GRADUAÇÃO EM CONSTRUÇÃO CIVIL
                                <br />
                                RESIDENCIAL, INDUSTRIAL E ESPECIAL
                            </ListItem>
                            <ListItem>
                                CREA: 3000111966BA
                            </ListItem>
                        </List>
                        
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Team