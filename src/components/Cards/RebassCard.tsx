/** @jsxImportSource theme-ui */

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
    <Card sx={{ backgroundColor: 'background' }}>
      <Image src={image.src} alt={image.alt} />
      <div sx={{ padding: 2 }}>
        <Heading as='h3' sx={{ variant: 'text.heading' }}>
          {title}
        </Heading>
        <Text sx={{
          variant: 'text.base',
          pb: 3,
        }}>
          {body}
        </Text>
        <Link href='https://rebassjs.org' sx={{ variant: 'links.primary' }}>
          Link
        </Link>
      </div>
    </Card>
  );
}

export default RebassCard;
