import React from 'react'
import { List,ListItem,ListIcon,Box,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {AiTwotoneHome} from 'react-icons/ai'
import {TiGroup} from 'react-icons/ti'
import {BsCameraVideoFill} from 'react-icons/bs'
import {CgMediaLive} from 'react-icons/cg'
import {GoSignIn} from 'react-icons/go'
import {GoSignOut} from 'react-icons/go'



// eslint-disable-next-line no-unused-expressions


const DATA_TO_RENDER = [
    {
    label : 'Home',
    icon : AiTwotoneHome,
    path: '/',
    color : " "
},
{
    label : 'Channels',
    icon : TiGroup,
    path : '/channels',
    color : " "
},
{
    label : 'VOD',
    icon: BsCameraVideoFill,
    path : '/vod',
    color : " "
},
{
    label : 'Live',
    icon : CgMediaLive,
    path : '/live',
    color : "red"
}
]

export const MinimalSideBar = (props) => {
    return(
        <Box bg="#0B6BBF" w = "70px" color = "white" h = "100vh" position="fixed"  fontSize="25px" mt="9vh">
            <List spacing={3} >
            <Box w = "70px"
                d = "flex"
                h = "50px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
               >
            
            <ListItem>
                <ListIcon as={GoSignOut}  mt={7} ml={1} onClick={props.toggle}/>
            </ListItem>
            
                            </Box>
                {
                    DATA_TO_RENDER.map(data =>{
                        return (
                            <Box w = "70px"
                                 d = "flex"
                                 h = "50px"
                                 alignItems="center"
                                 justifyContent="center"
                                 _hover={{
                                            backgroundColor:"#5e9cff"
                                        }}>
                                <Link to={data.path} style={{
                                    color:"none"
                                }}>
                                <ListItem >
                                    <ListIcon as={data.icon} color={data.color}/>
                                    
                                </ListItem>
                                </Link>
                            </Box>
                                )
                        })
                }
            </List>
        </Box>
        )
   
}
export const Sidebar = (props) => {
    return (
        <Box bgGradient="linear(to-b, #2A80CB, #81B7E6)" w = "230px" color = "white" h = "100vh" position="fixed"  fontSize="20px"  mt="9vh">
            <List spacing={3}>

            <Box w = "230px"
                pl={5}>
                <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                cursor="pointer"
                alignItems="center"
                justifyContent="left"
                onClick={props.toggle}
                >
                    <ListIcon as={GoSignIn} ml={1} />
                    <Text  color="gray.100">Masquer</Text>
                </ListItem>

                </Box>

                {
                    DATA_TO_RENDER.map(data =>{
                            return(
                                <Box w = "230px"
             _hover={{
                    backgroundColor:"#5e9cff"
                }}
                pl={5}>
                <Link to={data.path} >
                <ListItem 
                d = "flex"
                h = "50px"
                width="190px"
                
                alignItems="center"
                justifyContent="left"
               
                >
                    <ListIcon as={data.icon}  color={data.color}/>
                    {data.label}
                </ListItem>
                </Link>
            </Box>
                            )
                        })
                }
            
            </List>
            
        </Box>
    )
}



// eslint-disable-next-line no-unreachable
export const MainSideBar = (props) =>{
    
    return(
        <Box >
            {
                props.component

            }
            
        </Box>
    )
}
