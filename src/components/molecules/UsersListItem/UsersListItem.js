import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import { UserShape } from 'types';

const UsersListItem = ({
  userData: { name, attendance = 0, average },
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Average value={average} />
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => console.log('delete')} />
        </p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape).isRequired,
};

export default UsersListItem;
