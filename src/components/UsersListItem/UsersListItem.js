import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}%</p>
      </div>
      <button>X</button>
    </li>
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
