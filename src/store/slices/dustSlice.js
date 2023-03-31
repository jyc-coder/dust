import { createSelector } from 'reselect'

export const selectDustByStation = createSelector([(res) => res.data, (res, stationName) => stationName], (dusts, stationName) =>
    dusts?.find((dust) => dust.stationName === stationName) ? dusts?.find((dust) => dust.stationName === stationName) : dusts?.[0],
)

export const selectDustByStations = createSelector([(res) => res.data, (res, stationList) => stationList], (dusts, stationList) =>
    dusts?.filter((dust) => stationList.some((station) => station.sidoName === dust.sidoName && station.stationName === dust.stationName)),
)

export const returnOnlyStations = createSelector([(res) => res.data], (dusts) => dusts?.map((dust) => dust.stationName))
