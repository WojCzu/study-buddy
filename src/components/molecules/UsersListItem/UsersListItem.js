import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledInfo, StyledAverage } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average.toFixed(1)}</StyledAverage>
      <StyledInfo>
        <p>
          {name} <Button />
        </p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
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
