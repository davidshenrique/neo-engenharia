import { Box, ChakraProvider, Flex, Heading, HStack, Image, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import product1 from '../images/product1.jpeg'
import product2 from '../images/product2.jpeg'
import product3 from '../images/product3.jpeg'
import product4 from '../images/product4.jpeg'
import product5 from '../images/product5.jpeg'
import product6 from '../images/product6.jpeg'
import product7 from '../images/product7.jpeg'
import product8 from '../images/product8.jpeg'
import product9 from '../images/product9.jpeg'
import product10 from '../images/product10.jpeg'
import product11 from '../images/product11.jpeg'
import product12 from '../images/product12.jpeg'
import product13 from '../images/product13.jpeg'
import product14 from '../images/product14.jpeg'
import product15 from '../images/product15.jpeg'

const Products = () => {
  const slides = [
    {
      img: product1,
    },
    {
      img: product2,
    },
    {
      img: product3,
    },
    {
      img: product4,
    },
    {
      img: product5,
    },
    {
      img: product6,
    },
    {
      img: product7,
    },
    {
      img: product8,
    },
    {
      img: product9,
    },
    {
      img: product10,
    },
    {
      img: product11,
    },
    {
      img: product12,
    },
    {
      img: product13,
    },
    {
      img: product14,
    },
    {
      img: product15,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;

  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      id='projects'
      w="100%"
      h={'80vh'}
      p={10}
      alignItems="center"
      justifyContent="center"
      flexDirection={'column'}
      bg={'white'}
      mb={"50px"}
    >
      <Heading
        fontFamily={'Roboto'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        color={'rgb(111,23,22)'}
        p={'5px 10px 5px 10px'}
        textShadow={'1px 1px 1px #000000a0'}
        borderRadius={'20px 20px 0 0'}
        mb={'30px'}
      >
        Nossos Produtos
      </Heading>
      <Flex w={'100%'} gap={'50px'} align={'center'} justify={'center'}>
        <Flex w="45%" overflow="hidden" border={'5px solid rgb(111,23,22)'} borderRadius={'10px'} boxShadow={'5px 5px 5px #00000073'}>
          <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">

                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex>
        <List spacing={3} color={'rgb(111,23,22)'} fontSize={'20px'}>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Rufos Pingadeira
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Meio fios
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Pavek
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Revestimento cimentícios 3D
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Lajes pré moldadas
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Piso para calçadas (estriado)
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Piso podotáteis
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='rgb(111,23,22)' />
    Tampas canaletas para vedação das<br /> <Text ml={'31.5px'}>linhas de transmissões da eólica</Text>
  </ListItem>
</List>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Products