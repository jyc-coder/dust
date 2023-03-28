import React from 'react'
import { useGetDustQuery } from '../apis/axios'
import DustCards from '../components/DustCards'

function FavoriteDust() {
    const { data: dustList, isLoading, isError } = useGetDustQuery('전국')

    const locationList = localStorage.getItem('location') ? localStorage.getItem('location').split(',') : []
    const favList = locationList.map((location) => {
        return dustList?.response.body.items.find((dust) => dust.stationName === location)
    })
    console.log(favList)

    /** sidoName의 값을 설정하는 메소드  */
    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>

    return (
        <div>
            {favList?.map((fav) => {
                return (
                    <DustCards
                        key={fav.stationName}
                        sidoName={fav.sidoName}
                        stationName={fav.stationName}
                        pm10Grade={fav.pm10Grade}
                        pm10Value={fav.pm10Value}
                        dataTime={fav.dataTime}
                        locationList={locationList}
                    />
                )
            })}
        </div>
    )
}

export default FavoriteDust
