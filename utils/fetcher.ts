import axios from 'axios';
import { Fetcher } from 'swr';

interface IAPIResponse {
  apiVersion: string;
  success: boolean;
  result: any;
  error?: any;
  paginate: boolean;
  message: string;
}

const fetcher: Fetcher<IAPIResponse> = (url: string) =>
  axios.get(url).then((res) => res.data);

export default fetcher;
