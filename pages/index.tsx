import type { GetServerSideProps, NextPage } from 'next';
// components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';
import LivePriceBox from '@components/LivePriceBox';
// utils
import { IPost } from '@utils/interfaces';

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
