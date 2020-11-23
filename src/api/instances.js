import axios from 'axios';
import { Google_API, Bing_API } from '../config/api';

export const googleInstance = axios.create({
  baseURL: Google_API.url,
  headers: { 'Content-Type': 'application/json' },
});

export const bingInstance = axios.create({
  baseURL: Bing_API.url,
  headers: {
    'Ocp-Apim-Subscription-Key': Bing_API.key,
  },
});
