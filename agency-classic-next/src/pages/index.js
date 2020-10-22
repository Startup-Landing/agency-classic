import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
            title="Startup Agency Classic Landing"
          />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
          <Featured />
          <Pricing />
          <Testimonials />
          <Blogs />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
