import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
    sido: '서울',
    station: '한강대로',
    value: 0,
    pmData: {
        pm10Grade: '',
        pm10Value: '',
        dataTime: '',
    },
}

export const dustSlice = createSlice({
    name: 'dust',
    initialState,
    reducers: {
        changeSido: (state, action) => ({
            ...state,
            sido: action.payload,
        }),
        changeStation: (state, action) => ({
            ...state,
            station: action.payload,
        }),
        changeValue: (state, action) => ({
            ...state,
            value: action.payload,
        }),
        changePmData: (state, action) => ({
            ...state,
            pmData: action.payload,
        }),

        // station 값 설정
        // pmData 설정
    },
})

export function useDust() {
    const dust = useSelector((state) => state.dust)
    const dispatch = useDispatch()
    return {
        dust,
        dispatch,
    }
}

export const { changeStation, changeSido, changeValue, changePmData } = dustSlice.actions
export default dustSlice.reducer
