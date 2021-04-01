/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Center,Heading,Text,Badge} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import {Sidebar,MinimalSideBar,MainSideBar} from '../UI/Sidebar/Index'
import {App} from '../Elements/UserTest/Index'
import { Avatar, AvatarBadge, AvatarGroup , Stack} from "@chakra-ui/react"
import Typing, { Typist } from 'react-typist'
export const Channels = () => {
    


    let COMPONENT_TO_RENDER;
    const [isOpen, setIsOpen] = useState(false)
    let MARGIN_LEFT;
    let WIDTH,HEIGHT,SPACING

    const toogler = () =>{
        setIsOpen(!isOpen)
        console.log("hi");
    }

    if(!isOpen){
        COMPONENT_TO_RENDER = <Sidebar toggle={toogler}/>
        MARGIN_LEFT = "190px"
        WIDTH = "401px"
        HEIGHT = "350px"
        SPACING = "50px"
        
    }
    else{
        COMPONENT_TO_RENDER = <MinimalSideBar toggle={toogler}/>
        MARGIN_LEFT ="70px"
        WIDTH = "439.5px"
        SPACING = "20px"
        HEIGHT = "370px"

    }



    return (
        <>
        <MainSideBar component={COMPONENT_TO_RENDER}/>
        
        <Box p = "90px" d="flex" w="auto">
        
            <Box ml= {MARGIN_LEFT}>
            <Center p={8}>
                 <Heading color="#000">
                    <Typing>
                       The most populars channels
                       <Typing.Backspace count={30} delay={500}/>
                            These are incredible streamers you may look at ! 🔥🔥
                    </Typing> 
                 </Heading></Center>
                <App s={SPACING}/>
            </Box>
            
        </Box>
        </>
    )
}
