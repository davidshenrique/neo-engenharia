import { Box, Flex, Heading, HStack, Image, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import project1 from '../images/project1.jpeg'
import Project2 from '../images/project2.jpeg'
import Project3 from '../images/project3.jpeg'
import Project4 from '../images/project4.jpeg'
import Project5 from '../images/project5.jpeg'
import Project6 from '../images/project6.jpeg'
import Project7 from '../images/project7.jpeg'
import Project8 from '../images/project8.jpeg'

const Projects = () => {
  const slides = [
    {
      img: Project5,
    },
    {
      img: Project6,
    },
    {
      img: Project7,
    },
    {
      img: Project8,
    },
    {
      img: project1,
    },
    {
      img: Project2,
    },
    {
      img: Project3,
    },
    {
      img: Project4,
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
      boxShadow={'2px 2px 15px 2px #0000007d'}
      bg={'rgb(111,23,22)'}
      mb={"50px"}
    >
      <Heading
        fontFamily={'Roboto'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        color={'aliceblue'}
        p={'5px 10px 5px 10px'}
        textShadow={'1px 1px 1px #000000a0'}
        borderRadius={'20px 20px 0 0'}
        mb={'30px'}
      >
        Nossas obras
      </Heading>
      <Flex w={'100%'} gap={'50px'} align={'center'} justify={'center'}>
        <Flex w="45%" overflow="hidden" border={'5px solid white'} borderRadius={'10px'} boxShadow={'5px 5px 5px #00000073'}>
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
        <List spacing={3} color={'white'} fontSize={'20px'}>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Construção
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Reforma
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Projeto
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Manutenção
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Estrutura Metálica
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Impermeabilização
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Alvenaria
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Piso em concreto
  </ListItem>
  <ListItem>
    <ListIcon as={FaCheckCircle} color='#00ff26' />
    Hidráulica
  </ListItem>
</List>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Projects