import React from 'react';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';
import {
  NotesWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>There are no notes to show</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
