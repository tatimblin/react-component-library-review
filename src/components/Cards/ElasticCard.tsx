import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiImage,
} from '@elastic/eui';
import { IProps } from '../Card';

const ElasticCard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <EuiCard
      title={title}
      description={body}
      image={
        <EuiImage
          allowFullScreen
          alt={image.alt}
          src={image.src}
        />
      }
      footer={
        <EuiButton href={cta.link}>
          {cta.label}
        </EuiButton>
      }
    />
  );
}

export default ElasticCard;
