import './App.css'
import React, { useEffect } from 'react'
import SingleDust from './pages/SingleDust'
import { Link, Route, Routes } from 'react-router-dom'
import FavoriteDust from './pages/FavoriteDust'
import MultiDust from './pages/MultiDust'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GradeIcon from '@mui/icons-material/Grade'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { changeValue, useDust } from './store/slices/dust'
import { selectDustByStation } from './store/slices/dustSlice'
import { useGetDustQuery } from './store/apis/axios'
import { useLocationSlice } from './store/slices/locationSlice'
import { favoriteSlice } from './store/slices/favoriteSlice'

function App() {
    const { myLocation, dispatch } = useLocationSlice()
    const [value, setValue] = React.useState('single')
    const {
        data: dustList,
        isLoading,
        isError,
        isFetching,
    } = useGetDustQuery(myLocation.sidoName, {
        // 굳이 다시 data 의 내용을 꺼내서 set 하지 않아도,
        // 아래 코드를 통해서 바로 특정 filter 결과를 data 에 할당할 수 있습니다.
        selectFromResult: (result) => ({
            ...result,
            data: selectDustByStation(result, myLocation.stationName),
        }),
    })
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    /*   const oneDust = dustList?.response.body.items.find((dust) => dust.stationName === station)
        ? dustList?.response.body.items.find((dust) => dust.stationName === station)
        : dustList?.response.body.items[0] */
    /** sidoName의 값을 설정하는 메소드  */

    if (isLoading || isFetching) return <div>로딩중</div>

    if (isError || !dustList) return <div>에러발생</div>

    return (
        <div>
            <Routes>
                <Route path="/" element={<SingleDust />} />
                <Route path="multi" element={<MultiDust />} />
                <Route path="favorite" element={<FavoriteDust />} />
            </Routes>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction label="single" value="single" component={Link} to={'/'} icon={<LocationSearchingIcon />} />
                    <BottomNavigationAction label="multi" value="multi" component={Link} to={'/multi'} icon={<ListAltIcon />} />
                    <BottomNavigationAction label="favorite" value="favoriteSlice" component={Link} to={'/favorite'} icon={<GradeIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default App
