import { googleInstance, bingInstance } from './instances';
import { Google_API } from '../config/api';

export async function GoogleGet(q, offset) {
  const params = Google_API.params;
  params.q = q;
  params.start = offset * 10 + 1;
  const response = await googleInstance.get('', { params });
  return response;
}

export async function BingGet(q, offset) {
  const params = {
    q,
    offset: offset * 10,
  };
  const response = await bingInstance.get('', { params });
  return response;
}
