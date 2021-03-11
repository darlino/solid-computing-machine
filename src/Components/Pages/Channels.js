/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Center,Heading} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import {Sidebar,MinimalSideBar,MainSideBar} from '../UI/Sidebar/Index'
import {App} from '../Elements/UserTest/Index'

export const Channels = () => {

    let COMPONENT_TO_RENDER;
    const [isOpen, setIsOpen] = useState(false)
    let MARGIN_LEFT;
    let WIDTH,HEIGHT

    const toogler = () =>{
        setIsOpen(!isOpen)
        console.log("hi");
    }

    if(!isOpen){
        COMPONENT_TO_RENDER = <Sidebar toggle={toogler}/>
        MARGIN_LEFT = "260px"
        WIDTH = "401px"
        HEIGHT = "350px"
    }
    else{
        COMPONENT_TO_RENDER = <MinimalSideBar toggle={toogler}/>
        MARGIN_LEFT = "250px"
        WIDTH = "439.5px"
        HEIGHT = "370px"

    }



    return (
        <>
        <MainSideBar component={COMPONENT_TO_RENDER}/>
        
        <Box p = "90px" d="flex" w="auto">
        
            <Box ml= {MARGIN_LEFT}>
            <Center p={8}> <Heading color="#000"> All the Channels </Heading></Center>
                <App/>
            </Box>
            
        </Box>
        </>
    )
}
