/* eslint-disable @typescript-eslint/no-var-requires */
// require('dotenv').config()

console.log('Environment', import.meta.env.DEV)
export const  BASE_API_ENDPOINT = import.meta.env.DEV ? "http://localhost:1337"  : "http://localhost:1337"

export const API_ROUTES = Object.freeze({
    AUTH: {
        SIGN_IN: `/api/user/signin`,
        CREATE: `/api/user/create`
    }
})

/** @note Pass above added module api routes */
export const getApiRoute = (pathName: string) => `${BASE_API_ENDPOINT}${pathName}`;