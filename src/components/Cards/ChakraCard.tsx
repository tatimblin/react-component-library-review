import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import { IProps } from '../Card';

const themes : any = {
  'default': {
    components: {
      Heading: {
        variants: {
          sub: {
            color: '#0F70F0',
            fontFamily: 'serif',
            fontSize: '24px',
            lineHeight: '27px',
          },
        },
      },
      Link: {
        variants: {
          primary: {
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#0F70F0',
            color: '#fff',
          },
        },
      },
      Text: {
        baseStyle: {
          color: 'black',
        }
      },
    },
  },
  'subway': {
    components: {
      Heading: {
        variants: {
          sub: {
            color: '#16a34a',
            fontFamily: 'serif',
            fontSize: '21px',
            lineHeight: '28px',
          },
        },
      },
      Link: {
        variants: {
          primary: {
            backgroundColor: '#16a34a',
            fontFamily: 'serif',
            display: 'block',
            padding: '10px 14px',
            color: '#fff',
            borderRadius: '20px',
          },
        },
      },
      Text: {
        baseStyle: {
          color: 'black',
        }
      },
    },
  },
  'verizon': {
    components: {
      Heading: {
        variants: {
          sub: {
            color: '#dc2626',
            fontFamily: 'serif',
            fontSize: '21px',
            lineHeight: '28px',
          },
        },
      },
      Link: {
        variants: {
          primary: {
            display: 'inline-block',
            backgroundColor: '#dc2626',
            padding: '10px 14px',
            color: '#fff',
          },
        },
      },
      Text: {
        baseStyle: {
          color: 'white',
        }
      },
    },
  },
};

const ChakraCard: React.FC<IProps> = ({ title, body, image, cta, theme }) => {
  const chakraTheme = theme ? extendTheme(themes[theme]) : {};

  return (
    <ChakraProvider theme={chakraTheme}>
      <Box backgroundColor={theme === 'verizon' ? 'black' : 'white'}>
        <Image src={image.src} alt={image.alt} />
        <div className="p-4">
          <Heading variant="sub">{title}</Heading>
          <hr />
          <Text className="py-2">{body}</Text>
          <Link variant="primary" href={cta.link}>{cta.label}</Link>
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default ChakraCard;
