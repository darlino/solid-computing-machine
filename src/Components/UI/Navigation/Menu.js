import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,IconButton,MenuDivider} from '@chakra-ui/react'
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
  background="#1971ff" 
  border="none" 
  fontSize="18px" 
  textAlign="center"
  fontWeightt="none" 
  _active = {{ background: "#2865c7",color:"white"}}
    >
    {
        properties.map(element =>{
            return(
                <a href={element.path}>
                <MenuItem _hover={{ background: "#2865c7"}} icon={element.elements_icons}>
                    {element.text}
                </MenuItem>
               
                </a>
            )
        })
    }
    

  </MenuList>
</Menu>
        </div>
    )
}
