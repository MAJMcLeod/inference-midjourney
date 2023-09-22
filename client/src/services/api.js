import axios from 'axios';

// import { mdiConsolidate } from '@mdi/js';
// import store from '../store';
// import router from '../router';
import { _getPathAPI } from '../utils/helpers';

const axiosInstance = axios.create({
  baseURL: _getPathAPI(),
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.defaults.timeout = 15000;

export default axiosInstance;
