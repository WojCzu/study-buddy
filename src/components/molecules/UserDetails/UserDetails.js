import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from 'components/molecules/UsersListItem/UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {
  Wrapper,
  HeaderWrapper,
  ContentWrapper,
  Detail,
  Grades,
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
          <p>Course:</p>
          <p>Economy and finances</p>
        </Detail>
        <Detail>
          <p>
            Attendance: <span>{student.attendance}</span>
          </p>
        </Detail>
        <Detail>
          <p>Average grades:</p>
          <Grades>
            <div>
              <p>Modern Economy</p>
              <StyledAverage value={2.8}>2.8</StyledAverage>
            </div>
            <div>
              <p>Trade and logistics</p>
              <StyledAverage value={3.8}>3.8</StyledAverage>
            </div>
            <div>
              <p>Business Philosophy</p>
              <StyledAverage value={5.0}>5.0</StyledAverage>
            </div>
          </Grades>
        </Detail>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserDetails;
