import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NumberField from './NumberField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MAX_MOBILE_WIDTH } from '../../enums';
import { pageAtom, typeAtom, yearAtom } from '../../atoms/queryParamsAtom';
import { useAtom, useSetAtom } from 'jotai';
import { localTypeAtom, localYearAtom } from '../../atoms/filtersAtom';

const Filters = () => {
  // Global atoms - query params - those should be set when user clicks 'apply'
  const setType = useSetAtom(typeAtom);
  const setYear = useSetAtom(yearAtom);
  const setPage = useSetAtom(pageAtom);

  // local atoms - for filter changes without triggering network request
  const [localType, setLocalType] = useAtom(localTypeAtom);
  const [localYear, setLocalYear] = useAtom(localYearAtom);

  const handleApplyFilters = () => {
    const localYearIsDefined = localYear !== null;
    setYear(localYearIsDefined ? localYear.toString() : undefined);
    setType(localType);

    // when applying filters, always fetch first page
    setPage(1);
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
            <Select
              value={localType}
              onChange={(e) => setLocalType(e.target.value)}
            >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='movie'>Movie</MenuItem>
              <MenuItem value='series'>Series</MenuItem>
              <MenuItem value='episode'>Episode</MenuItem>
            </Select>

            <NumberField
              label='Optional year (1900-2025)'
              min={1900}
              max={2025}
              // @ts-expect-error - at this point i'm fighting with types of mui and the fact that year should be a number/undefined in the element and string/undefined in query params.
              // it is null by default
              value={localYear}
              onValueChange={(value) => setLocalYear(value)}
            />

            <Button
              color='primary'
              variant='contained'
              size='large'
              onClick={handleApplyFilters}
            >
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
