import './App.css'
import React, { useEffect } from 'react'
import { useGetDustQuery } from './apis/axios'
import SingleDust from './components/SingleDust'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import FavoriteDust from './components/FavoriteDust'
import MultiDust from './components/MultiDust'
import Button from '@mui/material/Button'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GradeIcon from '@mui/icons-material/Grade'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
function App() {
    const [sido, setSido] = React.useState('서울')
    const [station, setStation] = React.useState('')
    const [value, setValue] = React.useState(0)
    const [pmData, setPmData] = React.useState([
        {
            pm10Grade: '',
            pm10Value: '',
            dataTime: '',
        },
    ])

    const { data: dust, isLoading, isError } = useGetDustQuery(sido)

    /** sidoName의 값을 설정하는 메소드  */
    if (isLoading) return <div>로딩중</div>

    if (isError) return <div>에러발생</div>

    return (
        <div>
            <Routes>
                <Route path="single" element={<SingleDust sido={sido} dust={dust} setSido={setSido} station={station} setStation={setStation} pmData={pmData} setPmData={setPmData} />} />
                <Route path="multi" element={<MultiDust />} />
                <Route path="favorite" element={<FavoriteDust />} />
            </Routes>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction label="single" component={Link} to={'/single'} icon={<LocationSearchingIcon />} />
                    <BottomNavigationAction label="mulit" component={Link} to={'/multi'} icon={<ListAltIcon />} />
                    <BottomNavigationAction label="favorite" component={Link} to={'/favorite'} icon={<GradeIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default App
