import React,{useState} from 'react'
import {Carrousel} from '../Elements/Carrousel/Index'
import {Videos} from '../Elements/Thumbnail/Index'
import {Box} from '@chakra-ui/react'
import {Sidebar,MinimalSideBar,MainSideBar} from '../UI/Sidebar/Index'






// const MyListLoader = () => (
//     <ContentLoader>
//     <rect x="0" y="0" rx="5" ry="5" width="1180" height="710" />
    
//   </ContentLoader>
// )
export const DefaultPage = (props) => {

    let COMPONENT_TO_RENDER;
    const [isOpen, setIsOpen] = useState(false)
    let MARGIN_LEFT
    let WIDTH,HEIGHT

    const toogler = () =>{
        setIsOpen(!isOpen)
        console.log("hi");
    }

    if(!isOpen){
        COMPONENT_TO_RENDER = <Sidebar toggle={toogler}/>
        MARGIN_LEFT = "250px"
        WIDTH = "300px"
        HEIGHT = "350px"
    }
    else{
        COMPONENT_TO_RENDER = <MinimalSideBar toggle={toogler}/>
        MARGIN_LEFT = "60px"
        WIDTH = "300px"
        HEIGHT = "350px"

    }

    const HOME = (
        <>
            <Videos />
        </>
    )


    
    return (
        <Box>
            <MainSideBar component={COMPONENT_TO_RENDER}/>
            <Box ml= {MARGIN_LEFT}>
                {HOME}
            </Box>
        </Box>
    )
}
