import './App.css'
import DustCard from './components/DustCard'
import LocationSelect from './components/LocationSelect'
import React, { useEffect } from 'react'
import { useGetDustQuery } from './apis/axios'
import { Provider } from 'react-redux'
import store from './store/index'
function App() {
    const [sido, setSido] = React.useState('서울')
    const [station, setStation] = React.useState('')
    const [pmData, setPmData] = React.useState([
        {
            pm10Grade: '',
            pm10Value: '',
            dataTime: '',
        },
    ])
    const whatvalue = () => {
        console.log(sido, station)
    }
    const { data: dust, isLoading, isError } = useGetDustQuery(sido)
    /** sidoName의 값을 설정하는 메소드  */
    if (isLoading) return <div>로딩중</div>
    if (isError) return <div>에러발생</div>

    return (
        <Provider store={store}>
            <LocationSelect sido={sido} dust={dust} setSido={setSido} station={station} setStation={setStation} pmData={pmData} setPmData={setPmData} />
            <DustCard sido={sido} station={station} pmData={pmData} />
            <button onClick={() => whatvalue()}>현재 값</button>
        </Provider>
    )
}

export default App
