import { type Dispatch, type SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

const SearchBar = ({ value, setTitle, setPage }: Props) => {
  const handleValueChange = (name: string) => {
    setTitle(name);
    setPage(1);
  };

  return (
    <SearchBarWrapper>
      <label htmlFor='movie'>Enter the movie name you're looking for!</label>
      <StyledInput
        id='movie'
        type='text'
        placeholder='Search for a movie...'
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
`;

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 30rem;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export default SearchBar;
