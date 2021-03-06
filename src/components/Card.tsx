import CustomCard from './Cards/CustomCard';
import MUICard from './Cards/MUICard';
import ChakraCard from './Cards/ChakraCard';
import ElasticCard from './Cards/ElasticCard';
import ShopifyCard from './Cards/ShopifyCard';
import RebassCard from './Cards/RebassCard';
import DaisyCard from './Cards/DaisyCard';

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
  theme?: string
}

export {
  CustomCard,
  MUICard,
  ChakraCard,
  ElasticCard,
  ShopifyCard,
  RebassCard,
  DaisyCard,
};

export type {
  IProps
};

