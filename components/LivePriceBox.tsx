import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './LivePriceBox.module.scss';
import LivePriceDataTable from './LivePriceDataTable';
import LivePriceFilters from './LivePriceFilters';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const LivePriceBox = () => {
  const { data, error, mutate } = useSWR(
    'https://api.bitbarg.me/api/v1/currencies',
    fetcher
  );
  const [selectedUnit, setSelectedUnit] = useState<'toman' | 'tether'>('toman');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('dd');
  };
  const handleChangeUnitChange = () => {};

  return (
    <div className={styles.livePriceContainer}>
      <div className={styles.livePricePaper}>
        <div className={styles.livePriceHeader}>
          <Typography variant="h5" component="h2">
            قیمت لحظه‌ای
          </Typography>
        </div>
        <div className={styles.livePriceFilter}>
          <LivePriceFilters
            handleSearch={handleSearch}
            selectedUnit={selectedUnit}
            handleChangeUnitChange={handleChangeUnitChange}
          />
        </div>
        <div className={styles.livePriceTable}>
          {data ? (
            <LivePriceDataTable
              rows={data.result.items}
              metaData={data.result.meta}
              selectedUnit={selectedUnit}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LivePriceBox;
