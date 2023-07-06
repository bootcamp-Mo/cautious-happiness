import { Card, CardBody, Image, Stack, Text, Collapse, Button as ChakraButton, Flex, Heading } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

const Button = (props) => {
	return <ChakraButton px={.5} size='sm' variant='link' colorScheme="teal" {...props} />
}

const Project = ({ title, image, deployedUrl, repoUrl, description }) => {
	console.log('Project is rendering', title);
	const [show, setShow] = React.useState(false)

	const handleToggle = () => setShow(!show)

	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow='hidden'
			variant='filled'
			maxW={'500'}
			borderRadius='lg'>

			<Image
				boxSize='150px'
				objectFit='cover'
				src={image}
				alt={title}

			/>
			<Stack flex={1}>
				<CardBody>
					<Heading size='md' noOfLines={1}>{title}</Heading>
					<Collapse startingHeight={20} in={show}>
						<Text>{description}</Text>
					</Collapse>
					<Button size='sm' onClick={handleToggle} mt='1rem'>
						Show {show ? 'Less' : 'More'}
					</Button>
					<Flex direction='column' justifyContent='flex-end' mt='auto'>
						<Button as='a' href={repoUrl} isExternal>
							Repo <ExternalLinkIcon mx='2px' />
						</Button>
						{deployedUrl
							? <Button as='a' href={deployedUrl} isExternal>
								Deployed <ExternalLinkIcon mx='2px' />
							</Button>
							: <span> </span>
						}
					</Flex>

				</CardBody>
			</Stack>
		</Card >
	)
}

export default Project;
