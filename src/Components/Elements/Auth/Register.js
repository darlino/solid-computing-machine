import React,{useState} from 'react'
import coolImg from './jan.svg'
import wave from './wave1.svg'
import brock from './dec.svg'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Center,
    Text,Heading,Box,InputGroup,Button,InputRightElement, VStack
  } from "@chakra-ui/react"

import './style.css'
  
export const Register = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    let result 
    const handleSubmit = (e) =>{
         
        alert("result")   
      }
    const handlePasswordChange = (e) =>{
        let str = e.target.value
        if (str.length < 8){
            console.log("the password must be at least 8 characters")
        }
        else{
            console.log("ohhh yeah")
            setPassword(str)
        }
    }
    console.log(email);

    const PasswordInput = (
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value = {password}
              onChange={handlePasswordChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      
    return (
        <div>
        <Box w="500px" h="auto" shadow="base" style={{ margin : "120px auto"}} bgColor="white" borderRadius={4}>
            
                <Heading textAlign="center"> Register </Heading>
                <Box w="60%" style={{ margin : "20px auto"}} pb = {6}>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="first-name" isRequired mt={10}>
                            <FormLabel>Fisrt name</FormLabel>
                            <Input type="text" value={""} onChange={handleEmailChange}/>
                        </FormControl>
                        <FormControl id="last-name" isRequired mt={10}>
                            <FormLabel>Last name</FormLabel>
                            <Input type="text" value={""} onChange={handleEmailChange}/>
                        </FormControl>
                        <FormControl id="password" isRequired mt={10}>
                            <FormLabel>Password</FormLabel>
                            {PasswordInput}
                        </FormControl>
                        <Button type="submit" w="100%" bgColor="#0448B5" color="white" mt={10}>Login</Button>
                    </form>
                </Box>
            
                
        </Box>
        <Box >
            <Box w="500px" h="500px" position="absolute" top="20%" right="5px">
            <VStack spacing={0}>
                <img src={coolImg} style={{ margin : "120px auto", width:"100%",height:"100%"}}/>
            </VStack>
                
            </Box>
            <Box w="600px" h="70px" position="absolute" top="-10%" left="5px">
            <VStack>
                <img src={brock} style={{ margin : "120px auto", width:"100%",height:"100%"}}/>
            </VStack>
                
            </Box>
            <img src={wave} mb={4}></img>
        </Box>
      
        </div>
        
    )
}
