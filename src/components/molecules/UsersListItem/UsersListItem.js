import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {
  Wrapper,
  UserName,
  Attendance,
  UserInfo,
  Average,
} from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <Wrapper>
      <Average>{average.toFixed(1)}</Average>
      <UserInfo>
        <UserName>{name}</UserName>
        <Attendance>attendance: {attendance}%</Attendance>
      </UserInfo>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.number,
    average: PropTypes.number.isRequired,
  }),
};

export default UsersListItem;
