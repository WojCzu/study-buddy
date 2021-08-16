import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { wrapInput } from 'helpers/wrapInput';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import UserDetails from 'components/molecules/UserDetails/UserDetails';
import {
  SearchBarWrapper,
  SearchResults,
  SearchWrapper,
  StatusInfo,
  SearchResultsItem,
} from './SearchBar.styles';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents, getStudentById } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    const highlatedStudents = students.map((student) =>
      wrapInput(student, inputValue, 'name')
    );
    setMatchingStudents(highlatedStudents);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    closeMenu,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  // modal controll
  const { isOpen: isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState(null);
  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
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
                  onClick: (e) => {
                    e.nativeEvent.preventDownshiftDefault = true;
                    handleOpenStudentDetails(item.id);
                    closeMenu();
                  },
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
