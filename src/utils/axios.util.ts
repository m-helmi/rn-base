import axios from 'axios';
import {APIURL} from '@src/utils/urls.json';
import {ANDROID_API_KEY, IOS_API_KEY} from '../utils/urls.json';
import {showToast} from '@src/common';
import {isIos} from '.';
import {store} from '@src/store';

const instance = axios.create({
  baseURL: APIURL,
});

instance.interceptors.request.use(async req => {
  const user = store.getState().auth?.user;
  const lang = store.getState().lang.lang;

  if (user?.access_token) {
    req.headers.authorization = `Bearer ${user?.access_token}`;
  }
  req.headers['X-Authorization'] = isIos ? IOS_API_KEY : ANDROID_API_KEY;
  req.headers['Content-Type'] = 'application/json';
  req.headers['Accept-Language'] = lang ?? 'ar';

  return req;
});
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const isAuth = store.getState().auth?.user?.access_token;

    if (isAuth) {
    }
  },
);
export default instance;
