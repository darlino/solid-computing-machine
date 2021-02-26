import React from 'react'
import { List,ListItem,ListIcon,Box,Divider} from '@chakra-ui/react'
import {AiTwotoneHome} from 'react-icons/ai'
import {TiGroup} from 'react-icons/ti'
import {BsCameraVideoFill} from 'react-icons/bs'
import {CgMediaLive} from 'react-icons/cg'


// eslint-disable-next-line no-unused-expressions


export const MinimalSideBar = (props) => {
    return(
        <Box bg="#1971FF" w = "70px" color = "white" h = "90vh" position="fixed"  fontSize="25px" >
        <List spacing={3}  >
        <Box w = "70px"
         d = "flex"
            h = "50px"
            
            alignItems="center"
            justifyContent="center"
         _hover={{
                backgroundColor:"#5e9cff"
            }}
            >
        <ListItem 
        
            >
                <ListIcon as={AiTwotoneHome}  />
                
            </ListItem>
        </Box>
        <Box w = "70px"
         _hover={{
                backgroundColor:"#5e9cff"
            }}
            d = "flex"
            h = "50px"
            
            alignItems="center"
            justifyContent="center"
            >
        <ListItem    
            >
                <ListIcon as={TiGroup}  />
                
            </ListItem>
        </Box>
        <Box w = "70px"
        d = "flex"
            h = "50px"
            
            alignItems="center"
            justifyContent="center"
         _hover={{
                backgroundColor:"#5e9cff"
            }}
            >
        <ListItem 
            
           
            >
                <ListIcon as={BsCameraVideoFill}  />
                
            </ListItem>
        </Box>
            {/* You can also use custom icons from react-icons */}
            <Box w = "70px"
            d = "flex"
            h = "50px"
            
            alignItems="center"
            justifyContent="center"
         _hover={{
                backgroundColor:"#5e9cff"
            }}
            >
        <ListItem            
            >
                <ListIcon as={CgMediaLive} color="red" />
            
            </ListItem>
        </Box>
        </List>
        <Divider/>
    </Box>
        )
   
}
export const Sidebar = (props) => {
    return (
        <Box bg="#1971FF" w = "230px" color = "white" h = "90vh" position="fixed"  fontSize="20px" >
            <List spacing={3}  >
            <Box w = "230px"
             _hover={{
                    backgroundColor:"#5e9cff"
                }}
                pl={5}>
            <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                
                alignItems="center"
                justifyContent="left"
               
                >
                    <ListIcon as={AiTwotoneHome}  />
                    Home
                </ListItem>
            </Box>
            <Box w = "230px"
             _hover={{
                    backgroundColor:"#5e9cff"
                }}
                pl={5}>
            <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                
                alignItems="center"
                justifyContent="left"
               
                >
                    <ListIcon as={TiGroup}  />
                    Channels
                </ListItem>
            </Box>
            <Box w = "230px"
             _hover={{
                    backgroundColor:"#5e9cff"
                }}
                pl={5}>
            <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                
                alignItems="center"
                justifyContent="left"
               
                >
                    <ListIcon as={BsCameraVideoFill}  />
                    VOD
                </ListItem>
            </Box>
                {/* You can also use custom icons from react-icons */}
                <Box w = "230px"
             _hover={{
                    backgroundColor:"#5e9cff"
                }}
                pl={5}>
            <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                
                alignItems="center"
                justifyContent="left"
               
                >
                    <ListIcon as={CgMediaLive} color="red" />
                    Live
                </ListItem>
            </Box>
            </List>
            <Divider/>
        </Box>
    )
}



// eslint-disable-next-line no-unreachable
export const MainSideBar = (props) =>{
    
    return(
        <>
            {
                props.component
            }
            
        </>
    )
}
