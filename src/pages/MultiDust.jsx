import React, { useEffect } from 'react'
import DustCard from '../components/DustCard'
import LocationSelect from '../components/LocationSelect'
import { useGetDustQuery } from '../store/apis/axios'
import { returnOnlyStations } from '../store/slices/dustSlice'
import { useLocationSlice } from '../store/slices/locationSlice'
import { useFavoriteSlice } from './../store/slices/favoriteSlice'

function MultiDust() {
    const { favorite, dispatch } = useFavoriteSlice()
    const { allLocation } = useLocationSlice()
    // 단일 지역의 미세먼지 정보를 가져오는 쿼리
    const { data: dusts, isLoading, isError } = useGetDustQuery(allLocation.sidoName)

    // 선택된 시/도 내의 모든 지역의 이름을 가져오는 쿼리
    const { data: stationList } = useGetDustQuery(allLocation.sidoName, {
        selectFromResult: (result) => ({
            ...result,
            data: returnOnlyStations(result),
        }),
    })

    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>
    return (
        <div>
            <LocationSelect location={allLocation} dispatch={dispatch} single={false} stationList={stationList} />
            {dusts?.map((dust) => {
                return <DustCard dust={dust} favorite={favorite} dispatch={dispatch} />
            })}
        </div>
    )
}

export default MultiDust
