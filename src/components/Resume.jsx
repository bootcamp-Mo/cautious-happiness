import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Resume = () => {
    return (
        <Box>
            <Heading mb={4}>Resume</Heading>

            <Heading size="md" mb={2}>Profile:</Heading>
            <Text mb={4}>Detail-oriented Full Stack Web Developer with a passion for coding and a background in education...</Text>

            <Heading size="md" mb={2}>Education:</Heading>
            <Text mb={4}>Web Development FullStack Bootcamp, edX, Jan 2023 - Jul 2023...</Text>

            <Heading size="md" mb={2}>Technical Skills:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>React.js</Text>
                    <Text>MERN Stack</Text>
                    <Text>Node.js</Text>
                    <Text>NoSQL</Text>
                    <Text>Object-Oriented Programming (OOP)</Text>
                    <Text>Express.js</Text>
                    <Text>Heroku</Text>
                    <Text>MongoDB</Text>
                    <Text>Web Design</Text>
                    <Text>Agile Application Development</Text>
                    <Text>Debugging Code</Text>
            </SimpleGrid>

            <Heading size="md" mb={2}>Work Experience:</Heading>
            <Text mb={2}><b>Clari, Web Developer Intern, Jun 2022 - Jul 2022...</b></Text>
            <Text mb={4}>Collaborated within an agile team...</Text>
            <Text mb={2}><b>Powell's Books, Sales Generalist, May 2021 - Feb 2022...</b></Text>
            <Text mb={4}>Responsible for customer service...</Text>

            <Heading size="md" mb={2}>Other Professional Experience:</Heading>
            <Text mb={4}>Customer Service Representative at Wells Fargo...</Text>
            
            <Heading size="md" mb={2}>Soft Skills:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>Critical Thinking</Text>
                    <Text>Communication</Text>
                    <Text>Collaboration</Text>
                    <Text>Time Management</Text>
                    <Text>Conflict Resolution and Management</Text>
                    <Text>Customer Service</Text>
                    <Text>Teamwork</Text>
            </SimpleGrid>
        </Box>
    );
};

export default Resume;
