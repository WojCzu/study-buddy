import React, { useState } from 'react';
import Note from 'components/molecules/Note/Note';
import { useGetNotesQuery } from 'store';
import {
  NotesWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>There are no notes to show</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
