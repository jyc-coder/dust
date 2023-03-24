import './App.css'
import DustCard from './components/DustCard'
import LocationSelect from './components/LocationSelect'
import React from 'react'
function App() {
    const [sido, setSido] = React.useState('')
    const [station, setStation] = React.useState('')
    const [pmData, setpmData] = React.useState([])
    const whatvalue = () => {
        console.log(sido, station)
    }
    return (
        <div className="App">
            <LocationSelect sido={sido} setSido={setSido} station={station} setStation={setStation} />
            <DustCard />
            <button onClick={() => whatvalue()}>현재 값</button>
        </div>
    )
}

export default App
