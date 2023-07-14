import { Wrap, Image, WrapItem } from '@chakra-ui/react';
import React from 'react';

const Thumbnails = ({ projectData, activeSlide, handleThumbnailClick }) => (
  <Wrap spacing={'3'} justify={'center'} mt={'10'}>
    {projectData.map((project, index) => (
    
      <WrapItem 
      m={'1'} 
      borderRadius={'full'} 
      borderWidth={3}
      borderColor={'#ff927f'}
      boxShadow={'dark-lg'}
      > 
        <Image
        borderRadius={'full'}
        boxSize={'100'}
        key={index}
        src={project.image}
        onClick={() => handleThumbnailClick(index)}
        alt={project.title}
        className={activeSlide === index ? 'active-thumbnail' : ''}
        />
      </WrapItem>
    
    ))}
  </Wrap>
);

export default Thumbnails;