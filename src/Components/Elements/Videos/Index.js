import React,{useEffect,useState} from 'react'
import {Wrap,WrapItem,HStack,Box} from '@chakra-ui/react'
import axios from 'axios'
import CardE from '../CardsElements/index'
import { Skeleton, SkeletonCircle } from "@chakra-ui/react"
import {Link} from 'react-router-dom'

export const Videos = (props) => {

  const [image,setImage] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

  const BASE_URL = "https://www.breakingbadapi.com/api/characters?limit=100"
  
  useEffect(() =>{
    axios.get(`${BASE_URL}`)
    .then(response =>{
      setImage(response.data)
    })
  })

  const MyLoader = () => (
    <Box>
      <Skeleton w="300px" h="250px" p={2}/>
      <HStack spacing={3} mt={3} display="flex">
      <SkeletonCircle size="10"/>
      <Box h = "40px" >
        <Skeleton h="15px" w="220px" m={1}/>
        <Skeleton h="15px" w="180px" m={1}/>
      </Box>
      </HStack>
    </Box>
  );
    
  

    return (
          <Wrap spacing="100px">
            {
              image.map( i =>{
                if(i.name === undefined){
                  return(
                      <WrapItem >
                        <MyLoader />
                      </WrapItem>
                  )
                }
                else{
                  return(
                  <Link to='/player'>
                  <WrapItem>
                    <CardE spectators={i.char_id} profile_image={i.img} title={i.status} name={i.name} language="English" img={i.img} w={props.w} h={props.h}/>
                  </WrapItem>
                  </Link>
                )
                }
              })
            }
          </Wrap>
       
    )
}
