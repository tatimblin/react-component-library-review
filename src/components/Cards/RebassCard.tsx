import React from 'react';
import {
  Card,
  Image,
  Heading,
  Text,
  Link,
} from 'rebass';
import { IProps } from '../Card';

const RebassCard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <Card>
      <Image src={image.src} alt={image.alt} />
      <Heading as='h3'>
        {title}
      </Heading>
      <Text fontSize={0}>
        {body}
      </Text>
      <Link href='https://rebassjs.org'>Link</Link>
    </Card>
  );
}

export default RebassCard;
