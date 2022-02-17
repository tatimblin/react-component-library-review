import React from 'react';
import {
  Box, Heading, Text, Image, Link
} from '@chakra-ui/react';
import { IProps } from '../Card';

const ChakraCard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <Box>
      <Image src={image.src} alt={image.alt} />
      <Heading>{title}</Heading>
      <hr />
      <Text>{body}</Text>
      <Link href={cta.link}>{cta.label}</Link>
    </Box>
  );
}

export default ChakraCard;
