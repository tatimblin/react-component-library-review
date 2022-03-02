import React, { useState } from 'react';
import logo from './logo.svg';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { EuiProvider } from '@elastic/eui';
import { AppProvider } from '@shopify/polaris';
import { ThemeProvider } from 'theme-ui';
import {
  CustomCard, MUICard, ChakraCard, ElasticCard, ShopifyCard, RebassCard
} from './components/Card';
import enTranslations from '@shopify/polaris/locales/en.json';
import { ThemeList, themeuiThemes} from './themes/ThemeUI';

import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import '@shopify/polaris/build/esm/styles.css';

const chakraTheme = extendTheme({});

function App() {

  const [theme, setTheme] = useState<string>(ThemeList[0]);

  const image = {
    src: "https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fcompanies%2F894%2Fabout_modules%2F22694%2F42a19233-a8f9-4800-a146-b10a47c03e3f.jpg%3Fv%3D5f8e2c3e83016c74c04b01976a7bed79c185f9766db20f980e375e5715fa1968&fmt=jpeg&h=800&mode=crop&pos=top&prog=1&q=90&w=1200",
    alt: "Yext headquarters"
  };
  const cta = {
    link: 'https://yext.com',
    label: 'Our Website'
  };

  const handleThemeChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  }

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="App-header justify-between items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
          <span>Choose theme </span>
          <select name="theme" id="theme" onChange={handleThemeChange}>
            { ThemeList.map((x, y) => <option key={y}>{x}</option>)}
          </select>
        </label>
      </header>

      <section className="container mx-auto py-6 px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <CustomCard
          title="Cobalt"
          body="Perfect interfaces everywhere, we always have and we always will."
          image={image}
          cta={cta}
        />
        <MUICard
          title="Material UI"
          body="MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your design system and develop React applications faster."
          image={image}
          cta={cta}
        />
        <ChakraProvider theme={chakraTheme}>
          <ChakraCard
            title="Chakra UI"
            body="A simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
            image={image}
            cta={cta}
          />
        </ChakraProvider>
        <EuiProvider colorMode="light">
        <ElasticCard
            title="Elastic UI"
            body="The Elastic UI framework (EUI) is a design library in use at Elastic to build internal products that need to share our aesthetics. It distributes UI React components and static assets for use in building web layouts."
            image={image}
            cta={cta}
          />
        </EuiProvider>
        <AppProvider i18n={enTranslations}>
          <ShopifyCard
            title="Shopify Polaris"
            body="Polaris React is a component library designed to help developers create the best experience for merchants who use Shopify."
            image={image}
            cta={cta}
          />
        </AppProvider>
        <ThemeProvider theme={themeuiThemes[theme]}>
          <RebassCard
            title="Rebass"
            body="React primitive UI components built with styled system."
            image={image}
            cta={cta}
          />
        </ThemeProvider>
      </section>
    </div>
  );
}

export default App;
