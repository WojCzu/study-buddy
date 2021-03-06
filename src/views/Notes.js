import React, { useEffect } from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useForm } from 'react-hook-form';
import { useAddNoteMutation, useGetNotesQuery } from 'store';
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper,
} from 'views/Notes.styles';

const Notes = () => {
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          label="Title"
          name="title"
          id="title"
          autoComplete="off"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
          {...register('content', { required: true })}
        />
        {errors.content && <span>Content is required</span>}

        <Button type="submit">Add</Button>
      </FormWrapper>
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

export default Notes;
