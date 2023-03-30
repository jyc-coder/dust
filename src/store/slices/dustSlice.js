import { createSelectorCreator } from 'reselect'

export const selectDustByStation = createSelectorCreator([(res) => res.data, (res, stationName) => stationName], (dusts, stationName) => dusts?.find((dust) => dust.stationName === stationName))

export const selectDustByStations = createSelector([(res) => res.data, (res, stationList) => stationList], (dusts, stationList) =>
    dusts?.filter((dust) => stationList.some((station) => station.sidoName === dust.sidoName && station.stationName === dust.stationName)),
)
