/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Center,Heading} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import {Sidebar,MinimalSideBar,MainSideBar} from '../../UI/Sidebar/Index'
import Profile from './src/screens/UserProfileElements'

export const ProfilePage = () => {

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
        
        <Box  d="flex" w="auto">
        
            <Box ml= {MARGIN_LEFT}>
                <Profile/>
            </Box>
            
        </Box>
        </>
    )
}
