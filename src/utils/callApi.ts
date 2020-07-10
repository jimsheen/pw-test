import axios from 'axios';
import queryBuilder from './queryBuilder.js';

const ENDPOINT_BASE_URL = 'http://localhost:3004';

const callApi = async ({
  endpoint,
  params,
  uri
}: {
  endpoint ?: string,
  uri ? : string,
  params ? : any,
}) => {

  const queryString = params ? queryBuilder(params) : '';

  const endpointURL = uri ? `${ENDPOINT_BASE_URL}${uri}` : `${ENDPOINT_BASE_URL}`;

  return axios.get(`${endpointURL}${queryString}`);
}

export default callApi