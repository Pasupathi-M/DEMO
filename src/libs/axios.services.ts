/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import LocalStorageService from './localStorage.service'
import { Ipayload } from '../types/global.types'

class AxiosService{

    apiInstance!: AxiosInstance
    constructor() {
        this.apiInstance = axios.create()
    }

    onRequest(config:AxiosRequestConfig ): AxiosRequestConfig | any  {
        if(config?.headers){
            config.headers['access-toek'] = LocalStorageService.getItem('access-token') || ''
        }
        return config 
    }

    onRequestError(error: AxiosError): Promise<AxiosError> {
        console.error('onRequestError: ', error)
        return Promise.reject(error)
    }

    onResponse(response: AxiosResponse): AxiosResponse{
        return response
    }

    onResponseError(error: AxiosError): Promise<AxiosError>{
        console.error('onResponseError: ', error)
        return Promise.reject(error)
    }

    // With 
    getApiInstance(){
         this.apiInstance.interceptors.request.use(this.onRequest, this.onRequestError)
         this.apiInstance.interceptors.response.use(this.onResponse, this.onResponseError)
         return this.apiInstance
       
    }
    // **************** | Axios REST methods without interceptors| *****************
    async GET(URL: string, config?: AxiosRequestConfig){
        return await axios.get(URL, config)
    }

    async POST(URL: string, payload:Ipayload, config?:AxiosRequestConfig){
        return await axios.post(URL, payload, config)
    }

    async PUT(URL: string, payload: Ipayload, config?:AxiosRequestConfig){
        return await axios.put(URL, payload, config)
    }

    async PATCH(URL: string, payload: Ipayload, config?:AxiosRequestConfig){
        return await axios.patch(URL, payload, config)
    }

    async DELETE(URL: string, config?: AxiosRequestConfig){
        return axios.delete(URL, config)
    }
}
export default new AxiosService()