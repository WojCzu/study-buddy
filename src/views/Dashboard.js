import React, { useEffect, useState } from 'react';
import { Redirect, NavLink, useParams } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';
import styled from 'styled-components';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  const groupId = id || groups[0];

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.error(err));
  }, [groupId, groups]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <StyledHeader>
        <Title>{`Group ${groupId}`}</Title>
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
          <UsersList users={students} />
        </ViewWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;

  display: grid;
  grid-template-rows: 70px 1fr;
`;
const StyledHeader = styled.header`
  ${Title} {
    margin: 0;
  }
  nav {
    width: 80px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledLink = styled(NavLink)`
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.lightGrey};

  &.active {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
const ContentWrapper = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default Dashboard;
