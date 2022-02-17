import CustomCard from './Cards/CustomCard';
import MUICard from './Cards/MUICard';
import ChakraCard from './Cards/ChakraCard';
import ElasticCard from './Cards/ElasticCard';
import ShopifyCard from './Cards/ShopifyCard';
import RebassCard from './Cards/RebassCard';

interface CTA {
  link: string
  label: string
}

interface Image {
  src: string
  alt: string
}

interface IProps {
  title: string
  body: string
  image: Image
  cta: CTA
}

export {
  CustomCard,
  MUICard,
  ChakraCard,
  ElasticCard,
  ShopifyCard,
  RebassCard,
};

export type {
  IProps
};

