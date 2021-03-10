import React from 'react'
import {Box} from '@chakra-ui/react'
import ImgMediCard from './Card'
import Carousel from 'react-elastic-carousel'
import yt from '../../assets/youtube.jpg'
import './index.css'


export const Carrousel = () => {

    //elements de l'utilisateur (son username,son nombre de followers)

    // const [items,setItems] = useState([{}]);
    // const baseUrl = "https://jsonplaceholder.typicode.com/photos"
    // useEffect(() => {
    //     getAllProfile()
    // }, [])

    // const getAllProfile = () =>{
    //     axios.get(`${baseUrl}`)
    //     .then((res) => {
    //         const item = res.data;
    //         setItems(item);
    //         console.log(item)
    //         });
    // }

    
    return (
        <>
        
        <Box p = {12} d="flex" w="auto" flexDirection="column" pb={7}>
        
        <Carousel itemPadding={[10, 40]} itemsToShow={4} enableAutoPlay autoPlaySpeed={10000}
        renderPagination={({ pages, activePage, onClick }) => {
                return (
                        <>
                        </>
                        )
                    }}>
            <ImgMediCard name={"darlino"} subs_num={"4"} img={yt} zIndex="10"/>

        </Carousel>
          
        </Box>
        </>
    )
    
    
}
