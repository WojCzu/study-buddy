import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
};

const Template = (args) => <UsersListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Jarosław Morawski',
    attendance: '70%',
    average: '2.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Jarosław Morawski',
    attendance: '70%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Jarosław Morawski',
    attendance: '70%',
    average: '5.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Jarosław Morawski',
    attendance: '70%',
  },
};
