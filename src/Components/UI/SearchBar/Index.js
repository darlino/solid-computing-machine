import React from 'react'
import { InputGroup , InputLeftElement , Input } from "@chakra-ui/react";
import { BiSearchAlt } from 'react-icons/bi'
import {Suggestions} from './Suggestions'

export const SearchBar = () => {
    return (
        <div>
            <InputGroup mt={1} ml={13}>
                <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt color="black" />}
                 />
                <Input type="text" variant="filled" placeholder="Search for a video" w={["100px","500px"]} />
            </InputGroup>
            
        </div>
    )
}
