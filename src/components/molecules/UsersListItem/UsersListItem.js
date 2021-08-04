import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo, StyledAverage } from './UsersListItem.styles';

const UsersListItem = ({
  deleteUser,
  userData: { name, attendance = 0, average },
}) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
