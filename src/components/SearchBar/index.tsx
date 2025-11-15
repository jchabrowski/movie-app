import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  const [value, setValue] = useState<string>();

  const handleValueChange = (name: string) => {
    setValue(name);
  };

  return (
    <StyledInput
      name='movie'
      type='text'
      placeholder='Search for a movie...'
      value={value}
      onChange={(e) => handleValueChange(e.target.value)}
    />
  );
};

const StyledInput = styled.input`
  width: 32rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default SearchBar;
