import React from 'react'
import {VStack, Box , Text} from '@chakra-ui/react'
import {AiTwotoneHome} from 'react-icons/ai'
import {TiGroup} from 'react-icons/ti'
import {BsCameraVideoFill} from 'react-icons/bs'
import {CgMediaLive} from 'react-icons/cg'
const renderMinimalSideBar = () => {
    <VStack w="100px"></VStack>
}
export const Sidebar = () => {
    return (
        <div>
            <VStack w="auto" h="90vh" position="fixed" background= "#1971FF" >
                <Box color="#fff" w="300px" p={5} lineHeight="100px">
                        <Box w="150px" display="flex" justifyContent="space-around" fontSize="30px">
                        <Box>
                            <AiTwotoneHome/>
                        </Box>
                             
                            <Text> Home </Text>
                        </Box>
                        <Box w="200px" display="flex" justifyContent="space-around" fontSize="30px">
                            <TiGroup/> Channels
                        </Box>
                        <Box w="200px" display="flex" justifyContent="space-around" fontSize="30px">
                            <BsCameraVideoFill/> VOD
                        </Box>
                        <Box w="200px" display="flex" justifyContent="space-around" fontSize="30px">
                            <CgMediaLive/> Live
                        </Box>
                </Box>     
            </VStack>
        </div>
    )
}
