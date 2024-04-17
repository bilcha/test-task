import axios from 'axios';

axios.defaults.baseURL =
  'https://65f0e3fada8c6584131c90b1.mockapi.io/phone-book/CamperRent';

export const getDataAPI = async pageCount => {
  debugger;
  const { data } = await axios('', {
    params: { page: pageCount, limit: 4 },
  });
  return data;
};
