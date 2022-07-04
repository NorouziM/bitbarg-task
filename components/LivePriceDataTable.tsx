import * as React from 'react';
// next
import Image from 'next/image';
// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Stack, Typography, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// npm
import { addCommas, digitsArToEn } from '@persian-tools/persian-tools';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import CustomSmallAreaChart from './CustomSmallAreaChart';
// utils
import { ILiveDataResult } from '@utils/interfaces';
// style
import styles from './LivePriceBox.module.scss';
interface IMetaData {
  paginateHelper: {
    currentPage: number;
    currentCount: number;
    requestId: string;
    total: number;
    pageSize: number;
    lastPage: number;
  };
  prices: {
    buy: number;
    sell: number;
  };
  favoriteCurrencies?: any;
}
interface IProps {
  rows: ILiveDataResult[];
  metaData: IMetaData;
  selectedUnit: 'toman' | 'tether';
  fetchMoreData: () => void;
}

const LivePriceDataTable = ({
  rows,
  metaData,
  selectedUnit,
  fetchMoreData,
}: IProps) => {
  const getTomanPrice = (price: number, type: 'sell' | 'buy') => {
    const calculatedPrice =
      price * (metaData?.prices ? metaData?.prices[type] : 0);
    const toFixedNum = calculatedPrice < 5 ? 4 : 0;
    return addCommas(calculatedPrice.toFixed(toFixedNum)) + ' تومان';
  };

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <InfiniteScroll
        dataLength={rows.length}
        next={fetchMoreData}
        hasMore={rows.length < (metaData?.paginateHelper?.total || 10)}
        loader={<h4>در حال بارگزاری ...</h4>}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell align="center">نشان کردن</TableCell>
              <TableCell align="center">تغییرات</TableCell>
              <TableCell align="center">نمودار</TableCell>
              <TableCell align="center">
                {selectedUnit === 'toman' ? 'قیمت فروش' : 'ارزش بازار'}
              </TableCell>
              <TableCell align="center">
                {selectedUnit === 'toman' ? 'قیمت خرید' : 'قیمت جهانی'}
              </TableCell>
              <TableCell align="left">ارز دیجیتال</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ILiveDataResult, index: number) => (
              <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                  <IconButton aria-label="fingerprint">
                    <StarBorderIcon />
                  </IconButton>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700 }}
                  className={
                    row.percent !== 0
                      ? row.percent < 0
                        ? styles.redPercent
                        : styles.greenPercent
                      : ''
                  }
                >
                  {Math.abs(row.percent)}%{getArrowBasedOnPercent(row.percent)}
                </TableCell>
                <TableCell align="center">
                  <CustomSmallAreaChart
                    data={row.chart}
                    isPositive={Number(row.percent) >= 0}
                  />
                </TableCell>
                <TableCell align="center">
                  {selectedUnit === 'toman'
                    ? getTomanPrice(row.price, 'sell')
                    : addCommas(digitsArToEn(row.quote.toString())) + 'USDT '}
                </TableCell>
                <TableCell align="center">
                  {selectedUnit === 'toman' ? (
                    getTomanPrice(row.price, 'buy')
                  ) : (
                    <Typography fontWeight={'800'}>
                      {'USD ' + addCommas(digitsArToEn(row.price.toString()))}{' '}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="center">
                  {CoinNameComponent(row, index + 1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
};

const CoinNameComponent = (row: ILiveDataResult, index: number) => {
  return (
    <Stack alignItems={'center'} direction="row" justifyContent={'end'}>
      <Stack alignItems={'end'}>
        <Typography variant="body2">{row.enName}</Typography>
        <Stack direction="row">
          <Typography
            component="span"
            variant="caption"
            className={styles.coinNameCoin}
          >
            {row.coin}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            className={styles.coinNameNumber}
          >
            {index}
          </Typography>
        </Stack>
      </Stack>
      <Stack mr={1}>
        <Image src={row.icon} alt={row.enName} width="36px" height="36px" />
      </Stack>
    </Stack>
  );
};

const getArrowBasedOnPercent = (percentNum: number) => {
  if (percentNum > 0)
    return (
      <ArrowDropUpIcon
        fontSize="small"
        sx={{ position: 'relative', top: '5px' }}
      />
    );
  else if (percentNum < 0)
    return (
      <ArrowDropDownIcon
        fontSize="small"
        sx={{ position: 'relative', top: '5px' }}
      />
    );
  else
    return (
      <ArrowRightIcon
        fontSize="small"
        sx={{ position: 'relative', top: '5px' }}
      />
    );
};

export default LivePriceDataTable;
