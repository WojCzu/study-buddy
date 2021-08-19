import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import UserDetails from 'components/molecules/UserDetails/UserDetails';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import {
  Wrapper,
  StyledHeader,
  ContentWrapper,
  StyledLink,
} from './Dashboard.styles';

const Dashboard = () => {
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;
  return (
    <Wrapper>
      <StyledHeader>
        <Title>{`Group ${id}`}</Title>
        <nav>
          {groups.length
            ? groups.map((group) => (
                <StyledLink key={group} to={`/group/${group}`}>
                  {group}
                </StyledLink>
              ))
            : null}
        </nav>
      </StyledHeader>
      <ContentWrapper>
        <ViewWrapper>
          <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
          {isOpen ? (
            <Modal handleClose={handleCloseModal}>
              <UserDetails student={currentStudent} />
            </Modal>
          ) : null}
        </ViewWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;
