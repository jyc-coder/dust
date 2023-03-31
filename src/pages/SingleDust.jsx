import React, { useEffect } from 'react'
import { useGetDustQuery } from '../store/apis/axios'
import DustCard from '../components/DustCard'
import LocationSelect from '../components/LocationSelect'
import { useLocationSlice } from '../store/slices/locationSlice'
import { returnOnlyStations, selectDustByStation } from '../store/slices/dustSlice'

function SingleDust() {
    const { myLocation, dispatch } = useLocationSlice()
    // 단일 지역의 미세먼지 정보를 가져오는 쿼리
    const {
        data: dust,
        isLoading,
        isError,
    } = useGetDustQuery(myLocation.sidoName, {
        selectFromResult: (result) => ({
            ...result,
            data: selectDustByStation(result, myLocation.stationName),
        }),
    })

    /* const { data: dustList } = useGetDustQuery(myLocation.sidoName) */
    // 선택된 시/도 내의 모든 지역의 이름을 가져오는 쿼리
    const { data: stationList } = useGetDustQuery(myLocation.sidoName, {
        selectFromResult: (result) => ({
            ...result,
            data: returnOnlyStations(result),
        }),
    })

    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>
    return (
        <div>
            <LocationSelect location={myLocation} dispatch={dispatch} single={true} stationList={stationList} />
            <DustCard dust={dust} />
        </div>
    )
}

export default SingleDust
