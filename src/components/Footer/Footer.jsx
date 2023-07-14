import React from 'react'
import { HStack, Box, Link, Container, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Contact from './Contact'


const Footer = () => {
  return (
    <Box as="footer" mt="auto" bg="blue.500" width="100%">
      <Box>
        <HStack spacing={4} justify="center" padding={2}>
          <Box fontSize='sm'>
          </Box>
          <Link href='developer-github-url' isExternal >
            GitHub <ExternalLinkIcon mx='2px' />
          </Link>
          {'   '}|{'    '}
          <Link href='developer-linkedin-url' isExternal >
            LinkedIn <ExternalLinkIcon mx='2px' />
          </Link>
          {'     '}|{'       '}
          <Contact />
        </HStack>
      </Box>
    </Box>
  )
}
export default Footer