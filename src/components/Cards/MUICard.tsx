import React from 'react';
import {
  Card, Divider, Typography, Button
} from '@mui/material';
import Image from 'mui-image';
import { IProps } from '../Card';

const MUICard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <Card>
      <Image src={image.src} alt={image.alt} height={205.33} />
      <Typography component="h3">{title}</Typography>
      <Divider />
      <Typography component="p">{body}</Typography>
      <Button href={cta.link}>
        {cta.label}
      </Button>
    </Card>
  );
}

export default MUICard;
