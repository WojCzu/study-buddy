import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import Average from 'components/atoms/Average/Average';
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
        <Average size={'l'} value={student.average} />
        <Title>{student.name}</Title>
        <DeleteButton />
      </HeaderWrapper>
      <ContentWrapper>
        <Detail>
          <DetailLabel>Course:</DetailLabel>
          <DetailInfo isBig>{student.course}</DetailInfo>
        </Detail>
        <Detail>
          <DetailLabel>Attendance: </DetailLabel>
          <DetailInfo isInline> {student.attendance}%</DetailInfo>
        </Detail>
        <Detail>
          <DetailLabel>Average grades:</DetailLabel>
          {student.grades.length ? (
            student.grades.map(({ subject, average }) => (
              <StyledGrades key={subject}>
                <DetailInfo>{subject}</DetailInfo>
                <Average size={'m'} value={average} />
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
