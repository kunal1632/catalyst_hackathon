// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled components for enhanced styling
const AboutContainer = styled.div`
  position: absolute;
  top: 576px;
  left: 272px;
  width: 236px;
  height: 307px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
`;

const SectionHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #990099; 

`;
const Text = styled.span`
  color: #990099;
`;
const DetailItem = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
  color: #990099;
`;

const SVGIcon = styled.img`
  width: 20px; /* Adjust the size as needed */
  height: 20px;
  margin-right: 8px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 8px 0;
`;

const About = () => {
    return (
      <AboutContainer>
        <SectionHeading>About Me</SectionHeading>
        <DetailItem>
          <SVGIcon src="/gender.svg" alt="Gender Icon" />
          <Label></Label> <Text>Male</Text>
        </DetailItem>
        <Separator />
        <DetailItem>
          <SVGIcon src="/dob.svg" alt="Date of Birth Icon" />
          <Label></Label> <Text>January 1, 1990</Text>
        </DetailItem>
        <Separator />
        <DetailItem>
          <SVGIcon src="/Location.svg" alt="Address Icon" />
          <Label></Label> <Text>123 Street, City, Country</Text>
        </DetailItem>
        <Separator />
        <DetailItem>
          <SVGIcon src="/Message.svg" alt="Email Icon" />
          <Label></Label> <Text>example@email.com</Text>
        </DetailItem>
        <Separator />
        <DetailItem>
          <SVGIcon src="/Call.svg" alt="Phone Icon" />
          <Label></Label> <Text>+1 (555) 123-4567</Text>
        </DetailItem>
      </AboutContainer>
    );
  };

export default About;
