import React from 'react';
import {Card, Heading, Link, TextStyle} from '@shopify/polaris';
import { IProps } from '../Card';

const ShopifyCard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <Card>
      <img src={image.src} alt={image.alt} />
      <Heading element="h3">{title}</Heading>
      <hr />
      <TextStyle>{body}</TextStyle>
      <Link external url={cta.link}>
        {cta.label}
      </Link>
    </Card>
  );
}

export default ShopifyCard;
