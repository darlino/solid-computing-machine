/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Flex,Box,Spacer,Text,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button'
import {BsBellFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {properties} from './Data'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../../assets/logo.png'

export const  Navbar = (props) => {
  
    return (
        <Flex p={3} backgroundColor="#fff" fontFamily="PT sans" color="black" position="fixed" w="100%" maxHeight="9vh" pb="30px" top = "0" overflow="hidden" zIndex={1} textDecoration="none" borderBottom=".2px solid #747678">
        <Box >
            <Link to="/">
                <Box w="180px" h="80px" position="absolute" top="3px">
                    <img src={logo} style={{ width:"100%", height:"100%",background:"cover"}}></img>
                </Box>
            </Link>
        </Box>
        <Spacer />
        <Box>
            <InputGroup mt="2">
                <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt color="black" />}
                 />
                <Input type="text" variant="filled" placeholder="Search for a video" w={["100px","500px"]}/>
            </InputGroup>
        </Box>
        <Spacer/>
        
            <Button to="login" bg="rgba(5,61,126,1)" border="#0448b5" color = "white" bghover="#0448b5" > <Text marginTop="7px" > Login </Text> </Button>
            <Button to ="register" bg="none" border="rgba(5,61,126,1)" color = "rgba(5,61,126,1)" > <Text marginTop="7px" > Register </Text></Button>
        
        
      </Flex>
    )
}
