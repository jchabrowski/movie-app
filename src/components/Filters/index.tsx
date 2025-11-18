import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styled from 'styled-components';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import type { ValidType } from '../../hooks/useMovies';
import NumberField from './NumberField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MAX_MOBILE_WIDTH } from '../../enums';

const Filters = () => {
  const [type, setType] = useState<ValidType>('all');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as ValidType);
  };

  return (
    <FiltersWrapper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HeadingContainer>
            <FilterAltIcon />
            <Typography>Filters</Typography>
          </HeadingContainer>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={boxStyles}>
            <Select value={type} onChange={handleChange}>
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='movie'>Movie</MenuItem>
              <MenuItem value='series'>Series</MenuItem>
              <MenuItem value='episode'>Episode</MenuItem>
            </Select>

            <NumberField
              label='Select year (1900-2025)'
              min={1900}
              max={2025}
            />

            <Button color='primary' variant='contained' size='large'>
              Apply
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  margin: 2rem;
  width: 30rem;

  @media screen and (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
`;

const boxStyles = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',

  [`@media screen and (max-width: ${MAX_MOBILE_WIDTH})`]: {
    flexDirection: 'column',
  },
};

export default Filters;
