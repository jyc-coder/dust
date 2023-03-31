import React from 'react'
import DustCard from '../components/DustCard'

import { useGetMultipleDustsQuery } from '../store/apis/axios'
import { selectDustByStations } from '../store/slices/dustSlice'
import { useFavoriteSlice } from '../store/slices/favoriteSlice'

function FavoriteDust() {
    const { favorite, dispatch, favoriteSidos } = useFavoriteSlice()

    const {
        data: dusts,
        isLoading,
        isError,
    } = useGetMultipleDustsQuery(favoriteSidos, {
        selectFromResult: (result) => ({
            ...result,
            data: selectDustByStations(result, favorite),
        }),
    })

    /** sidoName의 값을 설정하는 메소드  */
    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>

    return (
        <div>
            {dusts?.map((dust) => {
                return <DustCard dust={dust} favorite={favorite} dispatch={dispatch} />
            })}
        </div>
    )
}

export default FavoriteDust
