import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How much does it cost to be a credit card merchant?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How can I open a merchant account?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How long does the application take?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I make payment outside of Hong Kong?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
