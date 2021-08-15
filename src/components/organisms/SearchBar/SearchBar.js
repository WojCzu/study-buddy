import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { wrapInput } from 'helpers/wrapInput';

import {
  SearchBarWrapper,
  SearchResults,
  SearchWrapper,
  StatusInfo,
  SearchResultsItem,
} from './SearchBar.styles';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

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
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

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
                {...getItemProps({ item, index })}
                isHighlighted={highlightedIndex === index}
                key={item.id}
                dangerouslySetInnerHTML={{ __html: item.name }}
              ></SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
export default SearchBar;
