import { type Dispatch, type SetStateAction } from 'react';
import styled from 'styled-components';
import { MAX_MOBILE_WIDTH } from '../../enums';
import TextField from '@mui/material/TextField';

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
      <TextField
        label='Enter the movie name you are looking for!'
        variant='outlined'
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 30rem;

  @media screen and (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

export default SearchBar;
