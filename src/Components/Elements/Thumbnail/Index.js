import React,{useEffect,useState} from 'react'
import {Wrap,WrapItem,HStack,Box,Text,VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Badge,
  PopoverCloseButton,
  Center,} from '@chakra-ui/react'
import tip from './tip.svg'
import { Skeleton, SkeletonCircle } from "@chakra-ui/react"
import {Link,useLocation} from 'react-router-dom'
import loca from '../../SeedData/my_video.mp4'
import {
  Container,
  MainVideoThumb,
  SideInfo,
  VideoThumb,
  ProfileBlock,
  ProfileImage,
  VideoInfo,
  VideoTitle,
  VideoOwner,
  VideoViews,
  VideoThumbImg,
  ViewerCount,
  LinkToUser,
  Button
} from './ThumbnailElements'
import {videosAPI} from '../../assets/dummyData'
function useQuery(){
  return new URLSearchParams(useLocation().search)
}



export const Videos = (props) => {


  let a = 1;
  const [image,setImage] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
  const [views,setViews] = useState(a)
  const [data, setData] = useState({
        title:"darlin",
        views : "",
        poster: "",
        owner : {
          username : "",
          profile_image : ""
        }
        
  })
  const usernames = []


  videosAPI.map(e =>{
    usernames.push(e.owner.username)
  })

  function useQuery (){
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();


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
    const randomNumber = () =>{
      return Math.floor(Math.random() * 7)
    }
   
    return (
      
          <Wrap spacing="100px">
             
            <Container>
              <Box display="flex" margin="30px" flexWrap="wrap">
              {
                videosAPI.map((e) =>{
                  return (
                    
                <VideoThumb>
                <Link to={`/player?video=${e.videoId}`} >
                <VideoThumbImg src={e.poster}/>
                <ViewerCount>
                    12:20
                  </ViewerCount>
                  </Link>
                  <ProfileBlock>
                    <Box mb="40px">
                      <Popover>
                        <PopoverTrigger>
                          <Button as={ProfileImage} >
                            <img src={e.owner.profile_image} style={{ borderRadius:"50%",objectFit:"cover",width:"100%",height:"100%"}}  background="cover" borderRadius="50%"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>
                            <HStack spacing={5}>
                              <img src={e.owner.profile_image} style={{ width:"50px",height:"50px",objectFit:"cover",background:"cover"}}/>
                              <VStack spacing={3}>
                                <HStack spacing={3}> <Text> {e.owner.username}</Text> <Badge colorScheme="purple">NEW </Badge></HStack>
                                
                                <Text color="#03204f"> {"2k subs"}</Text>
                              </VStack>
                              
                            </HStack>
                          </PopoverHeader>
                          <PopoverBody>
                            <Center>
                            <LinkToUser as={Link} to={`/profile?owner=${e.owner.username}`}>
                              View
                            </LinkToUser>
                            </Center>
                            
                          </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    </Box>
  
                    
                    <VideoInfo>
                        <Text isTruncated fontSize="16px"> {e.title}</Text>
                        <Link to={`/profile?owner=${e.owner.username}`}>
                          <Text isTruncated color="black" fontWeight="bold"> {e.owner.username}</Text>
                        </Link>
                        <Text color="blackAlpha.800" fontSize="14px"> {`700 views`}</Text>
                      </VideoInfo>
                  </ProfileBlock>
                </VideoThumb>
              
                  )
                })
              }  
            
              
              </Box>
            </Container>
          </Wrap>
       
    )
}
