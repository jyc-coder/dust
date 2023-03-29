import './App.css'
import React, { useEffect } from 'react'
import { useGetDustQuery } from './apis/axios'
import SingleDust from './pages/SingleDust'
import { Link, Route, Routes } from 'react-router-dom'
import FavoriteDust from './pages/FavoriteDust'
import MultiDust from './pages/MultiDust'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GradeIcon from '@mui/icons-material/Grade'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { changeValue, useDust } from './store/slices/dust'
import { SimCardDownload } from '@mui/icons-material'
function App() {
    const { dust, dispatch } = useDust()
    const { value, sido, station } = dust
    const { data: dustList, isLoading, isError } = useGetDustQuery(sido)

    const oneDust = dustList?.response.body.items.find((dust) => dust.stationName === station)
        ? dustList?.response.body.items.find((dust) => dust.stationName === station)
        : dustList?.response.body.items[0]
    /** sidoName의 값을 설정하는 메소드  */

    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>

    return (
        <div>
            <Routes>
                <Route path="/" element={<SingleDust dustList={dustList} oneDust={oneDust} />} />
                <Route path="multi" element={<MultiDust dustList={dustList} />} />
                <Route path="favorite" element={<FavoriteDust />} />
            </Routes>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        dispatch(changeValue(newValue))
                    }}
                >
                    <BottomNavigationAction label="single" component={Link} to={'/'} icon={<LocationSearchingIcon />} />
                    <BottomNavigationAction label="mulit" component={Link} to={'/multi'} icon={<ListAltIcon />} />
                    <BottomNavigationAction label="favorite" component={Link} to={'/favorite'} icon={<GradeIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default App
