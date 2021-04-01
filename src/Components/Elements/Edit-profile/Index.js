import React,{useState} from 'react'
import {Box,Center,Text,Input, VStack, Heading,HStack, Textarea,Button,Code} from '@chakra-ui/react'
import {AiFillEdit} from 'react-icons/ai'
import Typing from 'react-typist'

export const EditProfile = (props) => {

    const [value, setValue] = useState("")
    const [pictures,setPictures] = useState("")
    const handleChange = (event) => setValue(event.target.value)
    const [resize, setResize] = useState("vertical")
    
    

    const onDrop = e =>{
        setPictures(e.target.value)
        console.log(pictures)
    }
    return (
        <>
        <Center mt="300px">
        
            <Typing>
                <Heading d="flex" letterSpacing="3px"> Edit your profile <AiFillEdit /></Heading>
                <Typing.Backspace count={30} delay={500} />
                <Heading> Customize your user board to attract more viewers 🤩🤩🤩</Heading>
            </Typing>
        
        </Center>
        <form>

       
        <Box m = "20px auto" w="auto" p = "50px">
            
            <Center>
                
                <VStack spacing={10}>
                    <Box w = "500px">
                        <Text mb="8px">Channel Name: {value}</Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder="Here is a sample placeholder"
                            size="sm"
                        />
                    </Box>
                    
                    <Box w = "500px">
                    <Text mb="8px">Profile Image</Text>
                    <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png" onChange={onDrop}/>
                    </Box>
                    <Box w = "500px">
                    <Text mb="8px">Banner Image <Code> the recommended size is 1800px</Code></Text>
                    <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png" onChange={onDrop}/>
                    </Box>
                   
                    <Box w = "500px">
                    <Text mb="8px">Update your bio</Text>
                    <Textarea
                        placeholder="Here is a sample placeholder"
                        size="sm"
                        resize={resize}
                    />
                    </Box>

                    <Button type="submit" colorScheme="facebook"> Update Profile</Button>
                </VStack>
                

                
                
            </Center>
        </Box>
        </form>
        </>
    )
}
