import React from 'react'
import Navigation from '../Navigation'
import { Box, Heading, Text, Center, VStack } from '@chakra-ui/react'


const Header = () => {
	return (
		<Box as="header" bg={'#4c9c82'} width="100%" boxShadow='2xl' >
			<VStack spacing={2} justify="center" padding={2}>
				<Heading >Mo Sherred</Heading>
				<Text color='#dabb6a'>Aspiring Full Stack Web Developer</Text>
				<Navigation />
			</VStack>
		</Box>
	)
}

export default Header