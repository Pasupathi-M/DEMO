/* eslint-disable @typescript-eslint/no-unused-vars */
import { TNestedObj } from '../types/global.types'

class LocalStorageService {

    getItem(key: string){
        return  localStorage.getItem(key)
    }

    setItem(key: string, value: TNestedObj | string){
        value = JSON.stringify(value)
        return localStorage.setItem(key, value)
    }

    removeItem(key: string){
        return localStorage.removeItem(key)
    }

    clear(){
        return localStorage.clear()
    }
}

export default new LocalStorageService()