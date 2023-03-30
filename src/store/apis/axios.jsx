import { QuizSharp } from '@mui/icons-material'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const VITE_API_KEY = import.meta.env.VITE_API_KEY

const getParameters = {
    serviceKey: VITE_API_KEY,
    returnType: 'json',
    numOfRows: '642',
    pageNo: '1',
    ver: '1.0',
}

export const dustApi = createApi({
    reducerPath: 'dustApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
        paramSerializer: (params) => qs.stringify(params, { encode: false }),
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json, text/plain, */*')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getDust: builder.query({
            query: (sidoName) => ({
                url: '',
                params: {
                    ...getParameters,
                    sidoName,
                },
            }),
            transformResponse: (responseData) => {
                return responseData['response']['body']['items']
            },
        }),

        /** 한 쿼리에서 여러번 요청을 보내고자 할때 사용하는 방식 */
        getMultipleDusts: builder.query({
            async queryFn(_arg, queryApi, _extraOptions, fetchWithBQ) {
                const result = await _arg.reduce(async (promise, sidoName) => {
                    const argResult = await fetchWithBQ({
                        url: '',
                        params: { ...args, sidoName: sidoName },
                    })
                    // 에러처리
                    if (argResult.error) return { error: argResult.error }
                    // 결과값을 promise에 담아서 리턴
                    const promiseData = await promise.then()
                    return Promise.resolve([...promiseData, ...argResult.data['response']['body']['items']])
                }, Promise.resolve([]))
                return result.error ? { error: result.error } : { data: result }
            },
        }),
    }),
})

export const { useGetDustQuery, useGetMultipleDustsQuery } = dustApi
