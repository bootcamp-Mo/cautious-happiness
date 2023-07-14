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
            <Text textAlign={'center'} fontSize={'lg'} fontWeight={"bold"} p={5}>
            I'm smashing code together and seeing what works.
          </Text>
          </VStack>
        </Container>
        <Container >
          
          <Text fontSize={'lg'}  p={2}>
            I'm supposed to share about my self and I'm not sure what you want to know about me. 
          </Text>

          <Text fontSize={'md'}  p={2}>
            I'm pursuing this field because it reminds me of Myst and Ages. 
          </Text>
          <Text fontSize={'md'}  p={2}>
            Nah, I am doing this because I like learning, I like collaborating with people, I like making things. I have people in the industry who are rooting for me because they know with time that I will write good code and what to share what I have learned with other.
          </Text>
          <Text fontSize={'md'}  p={2}>
            If you are look for some one to mentor, who hasn't became set in their ways and is willing to learn new things, I'm prefect for that. 
          </Text>
        </Container>
      </HStack>
    </>
  )
}

export default About