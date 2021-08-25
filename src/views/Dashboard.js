import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import UserDetails from 'components/molecules/UserDetails/UserDetails';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery, useGetStudentByIdMutation } from 'store';
import {
  Wrapper,
  StyledHeader,
  ContentWrapper,
  StyledLink,
} from './Dashboard.styles';

const Dashboard = () => {
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState(null);
  const { data, isLoading } = useGetGroupsQuery();
  const [getStudentById] = useGetStudentByIdMutation();

  const handleOpenStudentDetails = async (id) => {
    const { data } = await getStudentById(id);
    setCurrentStudent(data.students);
    handleOpenModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Title>Loading...</Title>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) {
    return <Redirect to={`/group/${data.groups[0].id}`} />;
  }
  return (
    <Wrapper>
      <StyledHeader>
        <Title>{`Group ${id}`}</Title>
        <nav>
          {data.groups.length
            ? data.groups.map(({ id }) => (
                <StyledLink key={id} to={`/group/${id}`}>
                  {id}
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
