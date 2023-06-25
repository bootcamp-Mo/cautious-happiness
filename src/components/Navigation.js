import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
	return (
		<Flex>
			<Link to="/">About</Link>
			<Link to="/portfolio">Portfolio</Link>
			<Link to="/resume">Resume</Link>

		</Flex>
	)
}
export default Navigation