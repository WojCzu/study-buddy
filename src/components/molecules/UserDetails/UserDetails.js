import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from 'components/molecules/UsersListItem/UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {
  Wrapper,
  HeaderWrapper,
  ContentWrapper,
  Detail,
  DetailLabel,
  DetailInfo,
  StyledGrades,
} from './UserDetails.styles';

const UserDetails = ({
  student,
  classes = [
    { name: 'Modern Economy', average: '2.8' },
    { name: 'Trade and logistics', average: '3.7' },
    { name: 'Business Philosophy', average: '4.9' },
  ],
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <StyledAverage value={student.average}>{student.average}</StyledAverage>
        <Title>{student.name}</Title>
        <DeleteButton />
      </HeaderWrapper>
      <ContentWrapper>
        <Detail>
          <DetailLabel>Course:</DetailLabel>
          <DetailInfo isBig>Economy and finances</DetailInfo>
        </Detail>
        <Detail>
          <DetailLabel>Attendance: </DetailLabel>
          <DetailInfo isInline> {student.attendance}</DetailInfo>
        </Detail>
        <Detail>
          <DetailLabel>Average grades:</DetailLabel>
          {classes.length ? (
            classes.map(({ name, average }) => (
              <StyledGrades key={name}>
                <DetailInfo>{name}</DetailInfo>
                <StyledAverage value={average}>{average}</StyledAverage>
              </StyledGrades>
            ))
          ) : (
            <DetailInfo>There are nothing to show yet </DetailInfo>
          )}
        </Detail>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserDetails;
