import React, { useState, useRef } from 'react'
import { Heading, Text, Box, Container } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import RightArrow from './RightArrows';
import LeftArrow from './LeftArrow';
import Thumbnails from './Thumbnails';
import Project from './Project';
import projectData from './ProjectData';


const Portfolio = () => {
  console.log('Portfolio is rendering');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <Box>
      <Box >
        <Heading >Projects that I have worked on</Heading>
      </Box>
      <Container mt={1} >
			<Slider ref={sliderRef} {...settings} >
					{projectData.map((project, index) => {
							return <Project key={index} {...project} />
					})}
			</Slider>
      </Container>
      <Thumbnails
        projectData={projectData}
        activeSlide={activeSlide}
        handleThumbnailClick={handleThumbnailClick}
      />
  </Box>
  )
}

export default Portfolio;
