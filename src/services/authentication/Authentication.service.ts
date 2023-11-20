/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosService from '../../libs/axios.services';
import { Ipayload } from '../../types/global.types';
import { API_ROUTES, getApiRoute } from '../../data/ApiRoutes';

class AuthenticationService {
  AXIOS!: any;
  constructor() {
    this.AXIOS = AxiosService.getApiInstance();
  }
  async signIn(paylaod: Ipayload, query?: string) {
    let URL = getApiRoute(API_ROUTES?.AUTH?.SIGN_IN);
    if (query) {
      URL += `?${query}`;
    }
    return await AxiosService.POST(URL, paylaod);
  }

  async signUp(payload: Ipayload, query?: string) {
    let URL = API_ROUTES?.AUTH?.CREATE;
    if (query) {
      URL += `?${query}`;
    }
    return await AxiosService.POST(URL, payload);
  }
}

export default new AuthenticationService();
