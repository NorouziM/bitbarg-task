import React, { useState } from 'react';
// mui
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// style
import styles from './LivePriceBox.module.scss';

interface IProps {
  selectedUnit: 'toman' | 'tether';
  handleChangeUnitChange: (e: any) => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSort: (e: SelectChangeEvent) => void;
  sort: string;
}

const LivePriceFilters = ({
  selectedUnit,
  handleChangeUnitChange,
  setSearchText,
  handleChangeSort,
  sort,
}: IProps) => {
  const [isBookmarkFilterOn, setIsBookmarkFilterOn] = useState(false);

  return (
    <Stack
      direction="row"
      justifyContent={'space-between'}
      mt={2}
      width="100%"
      alignItems={'center'}
    >
      <FormControl sx={{ width: '58ch' }}>
        <OutlinedInput
          placeholder="جستجو"
          sx={{ height: '50px' }}
          onChange={(e) => setSearchText(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
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
      <Box sx={{ minWidth: 160, height: '55px' }}>
        <FormControl fullWidth>
          <InputLabel id="live-price-sort-label">ترتیب بر اساس</InputLabel>
          <Select
            id="live-price-sort-select"
            value={sort}
            label="ترتیب بر اساس"
            onChange={handleChangeSort}
          >
            <MenuItem value={1}>کمترین قیمت</MenuItem>
            <MenuItem value={2}>بیشترین قیمت</MenuItem>
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
