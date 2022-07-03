import axios from 'axios';
import { Fetcher } from 'swr';

const fetcher: Fetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export default fetcher;
