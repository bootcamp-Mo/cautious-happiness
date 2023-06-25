import React from 'react'
// import Navigation from '../Navigation'
import { Box, Heading, Text, Center, VStack } from '@chakra-ui/react'

import SimpleCloud from './assets/simple-clouds.png'

const Header = () => {
	return (
		<VStack
			bgImg={SimpleCloud}
			minH={200}
			bgSize='cover'
			bgPos='bottom'
		>
			<Box>
				<Center>
					<Heading color='#e8b959'>Monique</Heading>
				</Center>
			</Box>
			<Box >
				<Center>
					<Text>Inspiring Full Stack Web Developer | Software Engineer</Text>
				</Center>
			</Box>
		</VStack>
	)
}

export default Header