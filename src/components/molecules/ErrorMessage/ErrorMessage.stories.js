import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden !important;
`;

export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const LongErrorMessage = Template.bind({});
LongErrorMessage.args = {
  message:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ipsam. Eaque dolore distinctio, molestias velit minima harum. Dolorum, possimus excepturi qui expedita quod numquam temporibus dolor vero veritatis. Facilis suscipit recusandae reprehenderit natus velit possimus, iure, odio perspiciatis iusto cupiditate iste fugiat qui tenetur minus dolores perferendis. Quasi, facere quis.',
};
