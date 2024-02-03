// Active/index.jsx

import React from 'react';
import styled from 'styled-components';

const ActiveContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
`;

const SectionHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #490057; /* Purple color */
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
  color: #490057; /* Purple color */
`;

const PersonName = styled.div`
  font-weight: bold;
`;

const Status = styled.div`
  font-size: 12px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 8px 0;
`;

const Active = () => {
  return (
    <ActiveContainer>
      <SectionHeading>Active</SectionHeading>
      <PersonContainer>
        <ProfilePic src="/profile1.svg" alt="Profile 4" />
        <PersonDetails>
          <PersonName>Alice Johnson</PersonName>
          <Status>Online</Status>
        </PersonDetails>
      </PersonContainer>
      <Separator />
      <PersonContainer>
        <ProfilePic src="/profile2.svg" alt="Profile 5" />
        <PersonDetails>
          <PersonName>Charlie Smith</PersonName>
          <Status>Busy</Status>
        </PersonDetails>
      </PersonContainer>
      <Separator />
      <PersonContainer>
        <ProfilePic src="/profile3.svg" alt="Profile 6" />
        <PersonDetails>
          <PersonName>Eva Brown</PersonName>
          <Status>Online</Status>
        </PersonDetails>
      </PersonContainer>
      <Separator />
      <PersonContainer>
        <ProfilePic src="/profile4.svg" alt="Profile 7" />
        <PersonDetails>
          <PersonName>David Lee</PersonName>
          <Status>Busy</Status>
        </PersonDetails>
      </PersonContainer>
    </ActiveContainer>
  );
};

export default Active;
