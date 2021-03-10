import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,IconButton} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {properties} from './Data'
export const MenuOption = (props) => {
    return (
        <div>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    background="none"
                    icon={props.icon}
                    size="sm"
                    mb={2}
                    _hover={{ background: "none",color:"white"}}
                    _active = {{ background: "none",color:"white"}}
                    fontSize="25px"   
                />
                <MenuList 
                background="#0A6ABF" 
                border="none" 
                fontSize="18px" 
                textAlign="center"
                fontWeightt="none" 
                _active = {{ background: "#0A6ABF",color:"white"}}
                    >
                    {
                        properties.map(element =>{
                            return(
                                <Link to={element.path}>
                                <MenuItem _hover={{ background: "#5e9cff"}} icon={element.elements_icons} fontFamily="sans-serif">
                                    {element.text}
                                </MenuItem>
                            
                                </Link>
                            )
                        })
                    }
                </MenuList>
                </Menu>
        </div>
    )
}
