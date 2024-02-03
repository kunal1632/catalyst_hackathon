// YouMightKnow/index.jsx

import React from 'react';
import styled from 'styled-components';

const YouMightKnowContainer = styled.div`
  background-color: #fff;
  width: 260px;
  height: 234px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
`;

const SectionHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
    color: #490057;
`;

const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ProfilePic = styled.img`
  width: 40px; /* Adjust the size as needed */
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const PersonDetails = styled.div`
  flex-grow: 1;
  color: #490057;
`;

const PersonName = styled.div`
    font-size: 12px;

`;

const EmailId = styled.div`
  color: #490057;
  font-size: 10px;
`;

const YouMightKnow = () => {
  return (
    <YouMightKnowContainer>
      <SectionHeading>You Might Know</SectionHeading>
      <PersonContainer>
        <ProfilePic src="/profile1.svg" alt="Profile 1" />
        <PersonDetails>
          <PersonName>John Doe</PersonName>
          <EmailId>john.doe@email.com</EmailId>
        </PersonDetails>
      </PersonContainer>
      <PersonContainer>
        <ProfilePic src="/profile2.svg" alt="Profile 2" />
        <PersonDetails>
          <PersonName>Jane Smith</PersonName>
          <EmailId>jane.smith@email.com</EmailId>
        </PersonDetails>
      </PersonContainer>
      <PersonContainer>
        <ProfilePic src="/profile3.svg" alt="Profile 3" />
        <PersonDetails>
          <PersonName>Bob Johnson</PersonName>
          <EmailId>bob.johnson@email.com</EmailId>
        </PersonDetails>
      </PersonContainer>
    </YouMightKnowContainer>
  );
};

export default YouMightKnow;
