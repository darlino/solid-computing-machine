import React from 'react'
import {Box} from '@chakra-ui/react'
import ImgMediCard from './Card'
import Carousel from 'react-elastic-carousel'

export const Carrousel = () => {
    return (
        <Box ml="230px" p = {10} d="flex" w="auto">
        <Carousel itemPadding={[10, 20]} itemsToShow={6} enableAutoPlay  autoPlaySpeed={4000}>
        <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>

            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
            <ImgMediCard/>
        </Carousel>
          
        </Box>
    )
}
