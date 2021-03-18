import React,{useState,useEffect} from 'react'
import coolImg from './into.svg'
import wave from './wave.svg'
import brock from './lalou.svg'
import { BsFillEyeFill } from 'react-icons/bs'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Center,
    Text,Heading,Box,InputGroup,Button,InputRightElement, background, HStack,Divider
  } from "@chakra-ui/react"
import { BiRightArrow } from 'react-icons/bi'
import './style.css'


const dummyUser = [

    {
        email:"darnoul20@gmail.com",
        username:"darlino",
        password:"tokyodrift"
    },
    {
        email:"sebastian@gmail.com",
        username:"sebastian",
        password:"yoomeloop"
    },
    {
        email:"eren20@gmail.com",
        username:"eren",
        password:"titan"
    },
]
export const Login = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [username, setUsername] = useState(null)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }

    useEffect(() => {
        return () => {
            handlePasswordChange()
        }
    }, [])

    
    const handleSubmit = (e) =>{
        const user = {
            email : email,
            username : username,
            password : password
        }

        for (let index = 0; index < dummyUser.length; index++) {
            if(JSON.stringify(dummyUser[index]) === JSON.stringify(user)){
                alert("yo")
            }
            
        }
          
      }
    const handlePasswordChange = (e) =>{
        let str = e.target.value
        let pass = str

        if(str.length < 8){
            console.log("your pass word must be at least 8 characters")
        }
        setPassword(str)
        
     
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
              <Button h="1.75rem" size="sm" bgColor="#0448B5" color="white" onClick={handleClick} _hover= {{
                                bgColor:"#012966",
                                color:"white"
                            }} >
                {show ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      
    return (
        <HStack spacing={1} overflow="hidden">
        <Box w="600px" h="auto" shadow="dark-lg" style={{ margin : "250px"}} >
                <Box w="90%" style={{ margin : "20px auto" ,background:{wave}}} pb = {6}>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="email" isRequired mt={10}>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email} onChange={handleEmailChange} placeholder = "Enter your email"/>
                        </FormControl>
                        <FormControl id="username" isRequired mt={10}>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" value={username} onChange={handleUsernameChange} placeholder = "Enter your username"/>
                        </FormControl>
                        
                        <FormControl id="password" isRequired mt={10} >
                            <FormLabel>Password</FormLabel>
                            {PasswordInput}
                        </FormControl>
                        <Button  variant="outline" type="submit" w="100%" bgColor="#0448B5" color="white" mt={10} 
                            _hover= {{
                                bgColor:"#012966",
                                color:"white"
                            }}
                        >Login</Button>
                    </form>
                </Box>  
        </Box>
        <Box height="100vh" width="50%" bgColor="#012966">
                <img src={coolImg} style={{
                    position:"absolute",
                    width:"40%",
                    height:"40%",
                    left:"45%",
                    top:"40%"
                }}/>
                <Box width="400px" height="150px" marginTop="260px" ml="450px" mr="10px" position = "relative" right="60px" bgColor="white" textAlign="center" padding="30px" borderRadius="200px 200px 200px 0px">
                <Heading color="blackAlpha.900">
                    Login to watch amazing videos
                </Heading>
                </Box>
        </Box>

      
       
        </HStack>
        
    )
}
