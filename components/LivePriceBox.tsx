import React, { useEffect, useState } from 'react';
// mui
import { SelectChangeEvent, Stack, Typography } from '@mui/material';
// npm
import useSWR from 'swr';
// components
import LivePriceDataTable from './LivePriceDataTable';
import LivePriceFilters from './LivePriceFilters';
// utils
import { ILiveDataResult } from '@utils/interfaces';
import fetcher from '@utils/fetcher';
// styles
import styles from './LivePriceBox.module.scss';

const LivePriceBox = () => {
  // Internal State
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<string>('');
  const [searchText, setSearchText] = useState('');
  const [dataList, setDataList] = useState<ILiveDataResult[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<'toman' | 'tether'>('toman');

  // Data Fetching
  const { data } = useSWR(
    `https://api.bitbarg.me/api/v1/currencies?page=${page}${
      !!searchText ? `&q=${searchText}` : ''
    }${!!sort ? `&sort=${sort}` : ''}`,
    fetcher
  );

  const handleChangeUnitChange = (e: any) => {
    setSelectedUnit(e.target.value);
  };
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  const handleFetchMoreData = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (data) {
      const newData: ILiveDataResult[] = [];
      // only add new Items
      data.result.items.forEach((item: any) => {
        const isFound = dataList.some((element: any) => element.id === item.id);
        if (!isFound) newData.push(item);
      });
      setDataList((prevData: any) => [...prevData, ...newData]);
    }
  }, [data]);

  useEffect(() => {
    if (searchText || sort) {
      // If we start sorting ot searching, Reset page and data list
      setPage(1);
      setDataList([]);
    }
  }, [searchText, sort]);

  return (
    <div className={styles.livePriceContainer}>
      <div className={styles.livePricePaper}>
        <Stack
          className={styles.livePriceHeader}
          direction="row"
          alignItems={'center'}
        >
          <Typography variant="h5" component="h2" ml={2} fontWeight={'600'}>
            قیمت لحظه‌ای
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{ color: '#00000099' }}
          >
            {data ? data.result.meta.paginateHelper.total : 0} ارز دیجیتال
          </Typography>
        </Stack>
        <div className={styles.livePriceFilter}>
          <LivePriceFilters
            sort={sort}
            setSearchText={setSearchText}
            selectedUnit={selectedUnit}
            handleChangeUnitChange={handleChangeUnitChange}
            handleChangeSort={handleChangeSort}
          />
        </div>
        <div className={styles.livePriceTable}>
          {!!dataList.length && (
            <LivePriceDataTable
              rows={dataList}
              metaData={data ? data.result.meta : []}
              selectedUnit={selectedUnit}
              fetchMoreData={handleFetchMoreData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePriceBox;
