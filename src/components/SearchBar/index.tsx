import styled from 'styled-components';
import { MAX_MOBILE_WIDTH } from '../../enums';
import TextField from '@mui/material/TextField';
import { pageAtom, titleAtom } from '../../atoms/queryParamsAtom';
import { useAtom } from 'jotai';

const SearchBar = () => {
  const [, setPage] = useAtom(pageAtom);
  const [title, setTitle] = useAtom(titleAtom);

  const handleValueChange = (name: string) => {
    setTitle(name);
    setPage(1);
  };

  return (
    <SearchBarWrapper>
      <TextField
        label='Enter the movie name you are looking for!'
        variant='outlined'
        value={title}
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
