import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '36451556-b70cce37d343215b637d239eb';
export const PER_PAGE = 200;

export async function getImagesByQuery(query, page) {
  try {
    const { data } = await axios('/api/', {
      params: {
        key: API_KEY,
        q: query,
        per_page: PER_PAGE,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return data;
  } catch (error) {
    iziToast.error({
      message: `${error.message ?? String(err)}`,
      position: 'topCenter',
      timeout: 3000,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      close: false,
    });
  }
}
