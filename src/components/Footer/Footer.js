import React from 'react'
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Contact from './Contact'


const Footer = () => {
	return (
		<footer>
			<Contact />
			<Link href='developer-github-url' isExternal >
				GitHub <ExternalLinkIcon mx='2px' />
			</Link>

			<Link href='developer-linkedin-url' isExternal >
				LinkedIn <ExternalLinkIcon mx='2px' />
			</Link>
		</footer>
	)
}
export default Footer