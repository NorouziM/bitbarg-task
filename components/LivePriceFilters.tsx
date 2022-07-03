import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles from './LivePriceBox.module.scss';

interface IProps {
  handleSearch: any;
  selectedUnit: 'toman' | 'tether';
  handleChangeUnitChange: any;
}

const LivePriceFilters = ({
  handleSearch,
  selectedUnit,
  handleChangeUnitChange,
}: IProps) => {
  const [sort, setSort] = useState('');
  const [isBookmarkFilterOn, setIsBookmarkFilterOn] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  return (
    <Stack
      direction="row"
      justifyContent={'space-between'}
      mt={2}
      width="100%"
      alignItems={'center'}
    >
      <form onSubmit={handleSearch}>
        <FormControl sx={{ width: '44ch' }}>
          <OutlinedInput
            placeholder="جستجو"
            sx={{ height: '50px' }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="search"
                  onClick={handleSearch}
                  edge="end"
                  sx={{ marginRight: '3px' }}
                  type="submit"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <ToggleButton
        className={styles.priceButton}
        value="bookmarkFilter"
        selected={isBookmarkFilterOn}
        sx={{ height: '50px' }}
        onChange={() => setIsBookmarkFilterOn((prevState) => !prevState)}
      >
        <StarBorderIcon fontSize="small" sx={{ ml: 1 }} />
        نشان شده ها
      </ToggleButton>
      <Box sx={{ minWidth: 160, height: '50px' }}>
        <FormControl fullWidth>
          <InputLabel id="live-price-sort-label">ترتیب بر اساس</InputLabel>
          <Select
            id="live-price-sort-select"
            value={sort}
            label="ترتیب بر اساس"
            onChange={handleChange}
          >
            <MenuItem value={10}>کمترین قیمت</MenuItem>
            <MenuItem value={20}>بیشترین قیمت</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 310 }}>
        <ToggleButtonGroup
          sx={{ height: '49px' }}
          fullWidth
          value={selectedUnit}
          exclusive
          onChange={handleChangeUnitChange}
        >
          <ToggleButton value="toman">تومان</ToggleButton>
          <ToggleButton value="tether">تتر</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
};

export default LivePriceFilters;
