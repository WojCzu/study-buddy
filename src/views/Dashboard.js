import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import {
  Wrapper,
  StyledHeader,
  ContentWrapper,
  StyledLink,
} from './Dashboard.styles';

const Dashboard = () => {
  const { id } = useParams();
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

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
          <UsersList />
        </ViewWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;
