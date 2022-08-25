import axios from 'axios';
import {BASE_URL} from '../Constants/APIContants/BASE_URL';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
