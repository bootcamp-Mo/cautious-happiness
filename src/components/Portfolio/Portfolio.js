import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SimpleGrid, Heading, Text, Container } from '@chakra-ui/react';
import Project from './Project'
// import NPSapiProject from './assets/NPSapiProject.PNG'
import BrainSync from './assets/BrainSync-small.png'
// import WeatherApp from './assets/WeatherApp.png'
import SVGGen from './assets/SVGGen.PNG'
import Regex from './assets/Regex.PNG'
// import ReadMe from './assets/readme.PNG'
import NoSQL from './assets/NoSQL.PNG'
import Slider from 'react-slick';

// import JSFun from './assets/JavaScriptFun.PNG'
// import WorkDayScheduler from './assets/WorkDayScheduler.png'

const projectData = [

	{
		title: 'NoSQL: Social Network API',
		image: NoSQL,
		deployedUrl: '',
		repoUrl: 'https://github.com/bootcamp-Mo/shiny-potato',
		description: 'API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.'
	},
	// {
	// 	title: 'What is the Weather',
	// 	image: WeatherApp,
	// 	deployedUrl: 'https://bootcamp-mo.github.io/What-is-the-Weather/',
	// 	repoUrl: 'https://github.com/bootcamp-Mo/What-is-the-Weather',
	// 	description: 'A site to check the weather outlook for multiple cities'
	// },
	// {
	// 	title: 'National Park Search Resource',
	// 	image: NPSapiProject,
	// 	deployedUrl: 'https://bootcamp-mo.github.io/National-Park-Search-Resource/',
	// 	repoUrl: 'https://github.com/bootcamp-Mo/National-Park-Search-Resource',
	// 	description: 'An app that provides national park recommendations based on state and available activities'
	// },
	// {
	// 	title: 'ReadMe Generator',
	// 	image: ReadMe,
	// 	deployedUrl: '',
	// 	repoUrl: 'https://github.com/bootcamp-Mo/crispy-broccoli',
	// 	description: 'A readme generator'
	// },
	{
		title: 'BrainSync',
		image: BrainSync,
		deployedUrl: '',
		repoUrl: 'https://github.com/BrianMorse1/group-project-chat',
		description: 'A app that focuses on studying and collaboration that allows users to communicate with others in real time'
	},
	{
		title: 'Regular Expressions: IPv4 address',
		image: Regex,
		deployedUrl: 'https://gist.github.com/bootcamp-Mo/6ccee089252548b2601d7b54775d987a',
		repoUrl: 'https://github.com/bootcamp-Mo/didactic-engine/tree/main',
		description: 'Explains a regex expression that checks for a valid IPv4 address'
	},
	{
		title: 'SVG Generator',
		image: SVGGen,
		deployedUrl: '',
		repoUrl: 'https://github.com/bootcamp-Mo/ubiquitous-octo-robot',
		description: 'Object-oriented Programming: SVG Logo Maker'
	},
	// {
	// 	title: 'JavaScript quiz',
	// 	image: JSFun,
	// 	deployedUrl: 'https://bootcamp-mo.github.io/JavaScript-fundamental-quiz/',
	// 	repoUrl: 'https://github.com/bootcamp-Mo/JavaScript-fundamental-quiz',
	// 	description: 'A timed quiz on JavaScript fundamentals'
	// },
	// {
	// 	title: 'Day Planner',
	// 	image: WorkDayScheduler,
	// 	deployedUrl: 'https://bootcamp-mo.github.io/Day-Planner/',
	// 	repoUrl: 'https://github.com/bootcamp-Mo/Day-Planner',
	// 	description: ''
	// },
	// {
	// 	title: '',
	// 	image: '',
	// 	deployedUrl: '',
	// 	repoUrl: '',
	// 	description: ''
	// },
]

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<BiRightArrowAlt
			className={className}
			style={{ ...style, display: "block", color: "black" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<BiLeftArrowAlt
			className={className}
			style={{ ...style, display: "block", color: "black" }}
			onClick={onClick}
		/>
	);
}


const ProjectCards = () => {
	return (
		<SimpleGrid
			m={8}
			spacing={4}
			templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
			{projectData.map((project, index) => {
				return <Project key={index} {...project} />
			})}
		</SimpleGrid>
	)
}


const Portfolio = () => {
	console.log('Portfolio is rendering');
	return (

		<Container maxW={'7x1'} p={12}>
			<Heading as="h2" size="lg">My Projects</Heading>
			<Text fontSize={{ base: 'md', md: "xl" }} mt={5}>
				Here are some of the projects I've worked on.
			</Text>
			<Slider {...settings}>
				{projectData.map((project, index) => {
					return <Project key={index} {...project} />
				})}
			</Slider>
		</Container>

		// <Box>
		// 	<Center>
		// 		<VStack>
		// 			<Heading as="h2" size="lg">My Projects</Heading>
		// 			<Text fontSize={{ base: 'md', md: "xl" }} mt={5}>
		// 				Here are some of the projects I've worked on.
		// 			</Text>
		// 		</VStack>
		// 	</Center>
		// 	<ProjectCards />
		// </Box>
	)
}

export default Portfolio