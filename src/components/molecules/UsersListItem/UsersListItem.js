import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <Wrapper>
      <div>{average.toFixed(1)}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}%</p>
      </div>
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
