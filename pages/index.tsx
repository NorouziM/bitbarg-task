import type { GetServerSideProps, NextPage } from 'next';
// npm
import axios from 'axios';
// MUI
import { Container, Stack, Typography, Divider } from '@mui/material';
// components
import Wrapper from '@components/Wrapper';
// utils
import { IPost } from '@utils/interfaces';
import Header from '@components/Header';
import LivePriceBox from '@components/LivePriceBox';

interface IProps {
  posts: Array<IPost>;
}

const Home: NextPage<IProps> = ({}) => {
  return (
    <Wrapper
      metaTitle="قیمت لحظه ای"
      metaDescription="مشاهده قیمت لحظه ای ارز های دیجیتال"
    >
      <Header />
      <LivePriceBox />
    </Wrapper>
  );
};

export default Home;
