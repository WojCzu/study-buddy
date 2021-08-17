import Average from './Average';

export default {
  title: 'Components/Atoms/Average',
  component: Average,
};

const Template = (args) => <Average {...args}></Average>;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  value: '5.0',
  children: '5.0',
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  value: '3.5',
  children: '3.5',
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  value: '2.0',
  children: '2.0',
};

export const NoGrades = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
  value: '5.0',
  children: '5.0',
  size: 'm',
};

export const Big = Template.bind({});
Big.args = {
  value: '5.0',
  children: '5.0',
  size: 'l',
};
