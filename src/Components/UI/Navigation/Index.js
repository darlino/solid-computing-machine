import React from 'react'
import {Flex,Box,Spacer,Heading,HStack,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsBellFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {MenuOption} from './Menu'
import {FaUserCircle} from 'react-icons/fa'




export const  Navbar = (props) => {
  
    return (
        <Flex p={3} backgroundColor="#1971ff" fontFamily="PT sans" color="white">
        <Box mt={3} pl= {3} fontSize={["15px","30px"]}  cursor="pointer" onClick={props.toogle} >
            <GiHamburgerMenu  />
        </Box>
        <Box p="2" color="white">
          <Heading size="lg" ml={3}>GlobalTV</Heading>
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
        <HStack fontSize="30px" mt={2} spacing={10} mr={7}>
            <Box>
                <Box w="20px" h="20px" borderRadius="50%" backgroundColor="red" ml={4} mb={1} position ="absolute" top="5" fontSize="11px" textAlign="center" pt={0.5}>
                    <p paddingTop="3px">10</p>
                </Box>
                <BsBellFill />
            </Box>
            <Box>
                <MenuOption icon={<FaUserCircle/>}/>
            </Box>
        </HStack>
      </Flex>
    )
}
