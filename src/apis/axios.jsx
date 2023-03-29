import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const VITE_API_KEY = import.meta.env.VITE_API_KEY
console.log('meta.env', import.meta.env)
console.log('api key', VITE_API_KEY)
const getParameters = {
    serviceKey: VITE_API_KEY,
    returnType: 'json',
    numOfRows: '642',
    pageNo: '1',
    sidoName: '시/도이름',
    ver: '1.0',
}

export const dustApi = createApi({
    reducerPath: 'dustApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    }),
    endpoints: (builder) => ({
        getDust: builder.query({
            query: (sidoname) => ({
                url: '',
                params: {
                    ...getParameters,
                    sidoName: sidoname,
                },
            }),
        }),
    }),
})

export const { useGetDustQuery } = dustApi
