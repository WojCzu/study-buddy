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

const UserDetails = ({ student }) => {
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
          <StyledGrades>
            <DetailInfo>Modern Economy</DetailInfo>
            <StyledAverage value={2.8}>2.8</StyledAverage>
          </StyledGrades>
          <StyledGrades>
            <DetailInfo>Trade and logistics</DetailInfo>
            <StyledAverage value={3.8}>3.8</StyledAverage>
          </StyledGrades>
          <StyledGrades>
            <DetailInfo>Business Philosophy</DetailInfo>
            <StyledAverage value={5.0}>5.0</StyledAverage>
          </StyledGrades>
        </Detail>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserDetails;
