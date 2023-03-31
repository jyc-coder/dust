import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import StarRateIcon from '@mui/icons-material/StarRate'
import { Container, ToggleButton } from '@mui/material'
import { GRADE } from './../constants/pmgrade'
import { addFavoriteItem, deleteFavoriteItem } from '../store/slices/favoriteSlice'
import { useCallback } from 'react'

function DustCard({ dust, favorite, dispatch, single }) {
    const [selected, setSelected] = useState(false)
    const isFavorite = useMemo(() => favorite?.some((element) => element.sidoName === dust.sidoName && element.stationName === dust.stationName), [favorite, dust])

    const { sidoName, stationName, pm10Grade, pm10Value, dataTime } = dust
    const handleFavorite = useCallback(() => {
        isFavorite ? dispatch(deleteFavoriteItem({ sidoName: dust.sidoName, stationName: dust.stationName })) : dispatch(addFavoriteItem({ sidoName: dust.sidoName, stationName: dust.stationName }))
    }, [isFavorite, dust])
    return (
        // 카드 컴포넌트
        <Card sx={{ minWidth: 275, marginBottom: '20px', background: '#6c770b' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                        {sidoName}
                    </Typography>
                    <Typography sx={{ fontSize: 15, paddingTop: '5px' }} color="white" gutterBottom>
                        {stationName}
                    </Typography>
                </Box>
                <Container maxWidth="sm" sx={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 150,
                            height: 100,
                            borderRadius: 5,
                            backgroundColor: 'primary.dark',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5" component="div" color="white" fontWeight="700">
                            {pm10Grade === null ? '측정불가' : GRADE[pm10Grade]}
                        </Typography>
                    </Box>
                </Container>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    미세먼지 수치 : {pm10Value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    ({dataTime})
                </Typography>
                {!single && (
                    <ToggleButton
                        value="check"
                        selected={isFavorite}
                        onChange={() => {
                            handleFavorite()
                        }}
                    >
                        <StarRateIcon />
                    </ToggleButton>
                )}
            </CardContent>
        </Card>
    )
}

export default DustCard
