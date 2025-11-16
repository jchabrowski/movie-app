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
    <InputWrapper>
      <label htmlFor='movie'>Enter the movie name you're looking for!</label>
      <StyledInput
        id='movie'
        type='text'
        placeholder='Search for a movie...'
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </InputWrapper>
  );
};

const StyledInput = styled.input`
  width: 32rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const InputWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

export default SearchBar;
