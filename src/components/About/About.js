import React from 'react'
// import Navigation from '../Navigation'
import { Heading, Image, Box, Container, HStack, VStack, Text } from '@chakra-ui/react'
import Mo from '../../assets/Mo-profile.png'
const About = () => {
  return (
    <>
      <HStack>
        <Container align={'end'}>
          <VStack >
            <Box boxSize='150px'><Image
              borderRadius={'3xl'}
              src={Mo}
              alt='Mo the Developer'
            /></Box>

            <Heading as="h1" size={'3xl'} color={'gray.70'} mb={4}>
              About Me
            </Heading>
          </VStack>
        </Container>
        <Container bg={'pink.400'}>
          <Text fontSize={"2rem"} fontWeight={"bold"} p={5}>

          </Text>
        </Container>
      </HStack>
    </>
  )
}

export default About