import Modal from './Modal';
import UserDetails from 'components/molecules/UserDetails/UserDetails';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <UserDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        course: 'Economy and finances',
        grades: [
          { subject: 'Modern Economy', average: '2.8' },
          { subject: 'Trade and logistics', average: '3.7' },
          { subject: 'Business Philosophy', average: '4.9' },
        ],
      }}
    />
  </Modal>
);

export const Student = Template.bind({});
