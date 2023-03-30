import React, { useEffect } from 'react'
import { useGetDustQuery } from '../store/apis/axios'
import DustCard from '../components/DustCard'
import LocationSelect from '../components/LocationSelect'
import { useLocationSlice } from '../store/slices/locationSlice'
import { selectDustByStation } from '../store/slices/dustSlice'

function SingleDust() {
    const { myLocation, dispatch } = useLocationSlice()
    const {
        data: dustList,
        isLoading,
        isError,
    } = useGetDustQuery(myLocation.sidoName, {
        selectFromResult: (result) => ({
            ...result,
            data: selectDustByStation(result, myLocation.stationName),
        }),
    })

    console.log(dustList)

    /*   const oneDust = dustList?.response.body.items.find((dust) => dust.stationName === station)
        ? dustList?.response.body.items.find((dust) => dust.stationName === station)
        : dustList?.response.body.items[0] */
    /** sidoName의 값을 설정하는 메소드  */

    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>
    return (
        <div>
            <LocationSelect location={myLocation} dustList={dustList} />
            <DustCard dustList={dustList} />
        </div>
    )
}

export default SingleDust
