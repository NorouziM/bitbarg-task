import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './LivePriceBox.module.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
interface Idata {
  id: number;
  icon: string;
  faName: string;
  enName: string;
  coin: string;
  price: number;
  quote: number;
  percent: number;
  decimal: number;
  isFavorite: boolean;
  chart: string[];
}

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
  rows: Idata[];
  metaData: IMetaData;
  selectedUnit: 'toman' | 'tether';
}

const LivePriceDataTable = ({ rows, metaData, selectedUnit }: IProps) => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align="center">نشان کردن</TableCell>
            <TableCell align="center">تغییرات</TableCell>
            <TableCell align="center">نمودار</TableCell>
            <TableCell align="center">قیمت فروش</TableCell>
            <TableCell align="center">قیمت خرید</TableCell>
            <TableCell align="center">ارز دیجیتال</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                'نشان کردن'
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
                {Math.abs(row.percent)}%{getArrowBaseOnPercent(row.percent)}
              </TableCell>
              <TableCell align="center">نمودار</TableCell>
              <TableCell align="center">
                {selectedUnit === 'toman'
                  ? row.price * metaData.prices.sell + ' تومان'
                  : row.quote + ' USDT'}
              </TableCell>
              <TableCell align="center">
                {selectedUnit === 'tether'
                  ? row.price * metaData.prices.buy
                  : row.price + ' USD'}
              </TableCell>
              <TableCell align="center">{row.enName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const getArrowBaseOnPercent = (percentNum: any) => {
  switch (percentNum) {
    case percentNum > 0:
      return (
        <ArrowDropUpIcon
          fontSize="small"
          sx={{ position: 'relative', top: '5px' }}
        />
      );
    case percentNum < 0:
      return (
        <ArrowDropDownIcon
          fontSize="small"
          sx={{ position: 'relative', top: '5px' }}
        />
      );
    case percentNum === 0:
      return (
        <ArrowRightIcon
          fontSize="small"
          sx={{ position: 'relative', top: '5px' }}
        />
      );
    default:
      return (
        <ArrowRightIcon
          fontSize="small"
          sx={{ position: 'relative', top: '5px' }}
        />
      );
  }
};

export default LivePriceDataTable;
