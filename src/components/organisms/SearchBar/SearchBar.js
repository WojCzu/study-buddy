import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { wrapInput } from 'helpers/wrapInput';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import UserDetails from 'components/molecules/UserDetails/UserDetails';
import { useFindStudentsMutation, useGetStudentByIdMutation } from 'store';
import {
  SearchBarWrapper,
  SearchResults,
  SearchWrapper,
  StatusInfo,
  SearchResultsItem,
} from './SearchBar.styles';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [getStudentById] = useGetStudentByIdMutation();
  const [findStudents] = useFindStudentsMutation();
  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { data } = await findStudents({ searchPhrase: inputValue });
    const highlatedStudents = data.students.map((student) =>
      wrapInput(student, inputValue, 'name')
    );
    setMatchingStudents(highlatedStudents);
  }, 500);

  const stateReducer = (state, action) => {
    const { type, changes } = action;

    switch (type) {
      case useCombobox.stateChangeTypes.ItemClick:
      case useCombobox.stateChangeTypes.InputKeyDownEnter:
        handleOpenStudentDetails(changes.selectedItem.id);
        return { ...changes, inputValue: state.inputValue };

      default:
        return changes;
    }
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    stateReducer,
  });

  // modal controll
  const { isOpen: isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState(null);
  const handleOpenStudentDetails = async (id) => {
    const { data } = await getStudentById(id);
    setCurrentStudent(data.students);
    handleOpenModal();
  };
  //end modal controll

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="find student"
          name="Search"
          id="Search"
        />
        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                {...getItemProps({
                  item,
                  index,
                })}
                isHighlighted={highlightedIndex === index}
                key={item.id}
                dangerouslySetInnerHTML={{ __html: item.name }}
              ></SearchResultsItem>
            ))}
        </SearchResults>
        {isModalOpen ? (
          <Modal handleClose={handleCloseModal}>
            <UserDetails student={currentStudent} />
          </Modal>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
export default SearchBar;
