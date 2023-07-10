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
            <Box boxSize='150px'>
              <Image
              borderRadius={'3xl'}
              src={Mo}
              alt='Mo the Developer'
            />
            </Box>

            <Heading as="h1" size={'3xl'}  >
              About Me
            </Heading>
          </VStack>
        </Container>
        <Container >
          <Text fontSize={'lg'} fontWeight={"bold"} p={5}>
Hello I am Learning but I'm pretty great, You totally want to be an mentor to me, bring under your wings and teach me how to write good code. 
          </Text>
        </Container>
      </HStack>
    </>
  )
}

export default About