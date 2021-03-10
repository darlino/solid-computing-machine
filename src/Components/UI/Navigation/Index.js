/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Flex,Box,Spacer,HStack,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { Button, UncontrolledPopover, PopoverBody ,ListGroupItem, ListGroup } from 'reactstrap';
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
        <HStack fontSize="30px" mt={2} spacing={10} mr={7}>
            <Box position="absolute" top="24px">
                <Box w="20px" h="20px" color="white"  borderRadius="50%" backgroundColor="red" ml={4} mb={1} position ="absolute" bottom="13px" fontSize="11px" textAlign="center" pt={0.5}>
                    <p paddingTop="3px">10</p>
                </Box>
                <BsBellFill color="#247CC8"/>
            </Box>
            <Box >
                <Button id="PopoverFocus" type="button" color="none" outline="none" border="none" >
                    <FaUserCircle fontSize="30px" color="#247CC8"/>
                </Button>
            </Box>
            <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
            <ListGroup type="unstyled" display="flex">
            {
                properties.map(e =>{
                    return(
                        <Link to={e.path}> <ListGroupItem className="justify-content-between list-group-item-action p-2 " color="#247CC8" ><PopoverBody>{e.text}</PopoverBody></ListGroupItem></Link>
                    )
                })
            }
            </ListGroup>
            </UncontrolledPopover>
        </HStack>
      </Flex>
    )
}
