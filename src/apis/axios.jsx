import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getParameters = {
    serviceKey: '+Ca+bXO7ZLbcxTKbO2Wwi/1KCksLReg2XcPTPWmUUPapLNOZ0byAz4k6gzZEnyITf4C6e4mMVXBzf+8x8ivIlQ==',
    returnType: 'json',
    numOfRows: '100',
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
