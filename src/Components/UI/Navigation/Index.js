import React,{useState} from 'react'
import {Flex,Box,Spacer,Button,Heading,HStack} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {BsBellFill} from 'react-icons/bs'

export const  Navbar = () => {
    return (
        <Flex p={3} backgroundColor="#1971ff" fontFamily="PT sans" color="white">

        <Box mt={3} pl= {3} fontSize="30px" cursor="pointer">
            <GiHamburgerMenu />
        </Box>
        <Box p="2" color="white">
          <Heading size="lg">GlobalTV</Heading>
        </Box>
        <Spacer />
        <HStack fontSize="30px" mt={3} spacing={10} mr={7}>
            <Box>
                <BsBellFill />
            </Box>
            <Box>
                <FaUserCircle />
            </Box>
          
        </HStack>
        
        <Box fontSize="30px" mt={3} >
          
        </Box>
        
      </Flex>
    )
}
