import { Card, CardBody, Image, Stack, Text, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'


const Project = ({ title, image, deployedUrl, repoUrl, description }) => {
	console.log('Project is rendering', title);
	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow='hidden'
			variant='filled'>
			<Image
				boxSize='100px'
				objectFit='cover'
				maxW={{ base: '100%', sm: '200px' }}
				src={image}
				alt={title}
				borderRadius='lg'
			/>
			<Stack>
				<CardBody>
					<Heading size='md'>{title}</Heading>
					<Text>{description}</Text>
					<Link href={repoUrl} isExternal>
						Repo <ExternalLinkIcon mx='2px' />
					</Link>
					{deployedUrl
						? <Link href={deployedUrl} isExternal>
							Deployed <ExternalLinkIcon mx='2px' />
						</Link>
						: <span> </span>
					}
				</CardBody>
			</Stack>
		</Card>
	)
}

export default Project;

/**==============================================
 * ?                  Info
 *   
 *   
 **   remember 
 *
 *=============================================**/