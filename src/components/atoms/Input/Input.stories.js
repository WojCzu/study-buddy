import { Input } from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  value: 'I just typed something',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  value: 'I just typed something very very long to see how it works',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { placeholder: 'type something...' };

export const WithLongPlaceholder = Template.bind({});
WithLongPlaceholder.args = {
  placeholder: 'type something very very long to see...',
};

export const NumberType = Template.bind({});
NumberType.args = { type: 'number' };
