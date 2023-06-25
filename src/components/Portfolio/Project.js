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
					<Link></Link>
					<Link href={repoUrl} isExternal>
						Repo <ExternalLinkIcon mx='2px' />
					</Link>
					{/* {deployedUrl
						? <a href={deployedUrl}>Project</a>
						: <span>Project</span>
					} */}
					<Link href={deployedUrl} isExternal>
						deployed <ExternalLinkIcon mx='2px' />
					</Link>

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