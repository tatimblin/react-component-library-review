import React from 'react';
import {AppProvider, Card, Heading, Link, TextStyle, TextContainer, CustomProperties} from '@shopify/polaris';
import { IProps } from '../Card';
import enTranslations from '@shopify/polaris/locales/en.json';

const ShopifyCard: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <AppProvider i18n={enTranslations}>
      <TextContainer>
        <CustomProperties>
          <Card>
            <img src={image.src} alt={image.alt} />
            <Card.Section>
              <Heading element="h3">{title}</Heading>
              <hr />
              <TextStyle>{body}</TextStyle>
              <Link external url={cta.link}>
                {cta.label}
              </Link>
            </Card.Section>
          </Card>
        </CustomProperties>
      </TextContainer>
    </AppProvider>
  );
}

export default ShopifyCard;
