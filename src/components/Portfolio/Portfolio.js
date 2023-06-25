import React from 'react'
import { Card, SimpleGrid, Tabs } from '@chakra-ui/react';
import Project from './Project'
import NPSapiProject from './assets/NPSapiProject.PNG'
import BrainSync from './assets/BrainSync-small.png'

const projectData = [
	{
		title: 'JavaScript fundamental quiz',
		image: '',
		deployedUrl: 'https://bootcamp-mo.github.io/JavaScript-fundamental-quiz/',
		repoUrl: 'https://github.com/bootcamp-Mo/JavaScript-fundamental-quiz',
		description: 'A timed quiz on JavaScript fundamentals'
	},
	{
		title: 'What is the Weather',
		image: '',
		deployedUrl: 'https://bootcamp-mo.github.io/What-is-the-Weather/',
		repoUrl: 'https://github.com/bootcamp-Mo/What-is-the-Weather',
		description: 'A site to check the weather outlook for multiple cities'
	},
	{
		title: 'National Park Search Resource',
		image: NPSapiProject,
		deployedUrl: 'https://bootcamp-mo.github.io/National-Park-Search-Resource/',
		repoUrl: 'https://github.com/bootcamp-Mo/National-Park-Search-Resource',
		description: ''
	},
	{
		title: 'Day Planner',
		image: '',
		deployedUrl: 'https://bootcamp-mo.github.io/Day-Planner/',
		repoUrl: 'https://github.com/bootcamp-Mo/Day-Planner',
		description: 'An app that provides national park recommendations based on state and available activities'
	},
	{
		title: 'ReadMe Generator',
		image: '',
		deployedUrl: '',
		repoUrl: 'https://github.com/bootcamp-Mo/crispy-broccoli',
		description: 'A readme generator'
	},
	{
		title: 'BrainSync',
		image: BrainSync,
		deployedUrl: '',
		repoUrl: 'https://github.com/BrianMorse1/group-project-chat',
		description: 'A app that focuses on studying and collaboration that allows users to communicate with others in real time'
	},
	// {
	// 	title: '',
	// 	image: '',
	// 	deployedUrl: '',
	// 	repoUrl: '',
	// 	description: ''
	// },
]


const Portfolio = () => {
	console.log('Portfolio is rendering');
	return (
		<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
			{projectData.map((project, index) => {
				return <Project key={index} {...project} />
			})}
		</SimpleGrid>
	)
}

export default Portfolio