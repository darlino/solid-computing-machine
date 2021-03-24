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
import {VideoPlayerMain,VideoPlayer} from '../../UI/VideoPlayerComponent/Index';

function useQuery(){
  return new URLSearchParams(useLocation().search)
}



export const Videos = () => {


  let query = useQuery()
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

  const videosAPI = [
    {
        title:"The things goes skraa",
        views : {views},
        videoId:12,
        poster: "https://d34tp322e0pcja.cloudfront.net/wp-content/uploads/2019/08/20210015/colors-stand-out.jpg",
        owner : {
          username : "Darlino",
          profile_image : "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?cs=srgb&dl=pexels-helena-lopes-708392.jpg&fm=jpg"
        }
        
    },
    {
      title:"You are not good dude",
      views : {views},
      videoId:13,
      poster: "https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg",
      owner : {
        username : "Steven",
        profile_image : "https://images.pexels.com/photos/6877424/pexels-photo-6877424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
      
  },
  {
    title:"I live in california",
    views : {views},
    videoId:14,
    poster: "https://i.pinimg.com/236x/e8/87/86/e88786b86bde6d09c02581a660275ffa.jpg",
    owner : {username : "Toto"
  ,
  profile_image : "https://images.pexels.com/photos/6877424/pexels-photo-6877424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    
},
{
  title:"Messi is eibarman he only score when he's faces the eibar team",
  views : {views},
  videoId:15,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGMIi8npgiO_fTT0ChfKWvxcOOmaEFQX2dw&usqp=CAU",
  owner : {username : "Todo",
  profile_image : "https://images.pexels.com/photos/4142082/pexels-photo-4142082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  
},
{
  title:"My name is blake",
  views : {views},
  videoId:16,
  poster: "https://img.itch.zone/aW1nLzMzMTk0MTAucG5n/original/Qui7gA.png",
  owner : {username : "Gojo",
  profile_image : "https://images.pexels.com/photos/2169500/pexels-photo-2169500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  
},
{
  title:"Are you simping son",
  views : {views},
  videoId:17,
  poster: "https://i.ytimg.com/vi/rICunDRc_WM/maxresdefault.jpg",
  owner : {username : "Tirex",
  profile_image : "https://i.pinimg.com/564x/9f/43/0a/9f430ab2443554f545ba7e3cdb01b399.jpg"}
  
},
{
  title:"i don't like anime cause i mad",
  views : {views},
  videoId:18,
  poster: "https://i.ytimg.com/vi/GxJqC1uUFU0/maxresdefault.jpg",
  owner : {username : "Ralph",
  profile_image : "https://images.pexels.com/photos/6877424/pexels-photo-6877424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  
},
{
  title:"The things goes skraa",
  views : {views},
  videoId:19,
  poster: "https://images.pexels.com/photos/2912309/pexels-photo-2912309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  owner : {username : "Iori",
  profile_image : "https://images.pexels.com/photos/6877424/pexels-photo-6877424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  
},
{
  title:"heyy see yaaahh",
  views : {views},
  videoId:20,
  poster: "https://images.pexels.com/photos/777209/pexels-photo-777209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  owner : {username : "Stephane",
  profile_image : "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  
},
{
  title:"There's no way i can save you cause i need to be save tooo",
  views : {views},
  videoId:21,
  poster: "https://images.pexels.com/photos/721967/pexels-photo-721967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  owner : {username : "Daniil",
  profile_image : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  
},
{
  title:"how to become a better programmer",
  views : {views},
  videoId:22,
  poster: "https://images.pexels.com/photos/584392/taxi-bus-city-urban-584392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  owner : {username : "Adidas",
  profile_image : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  
},

    
  ]
  videosAPI.map(e =>{
    usernames.push(e.owner.username)
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
                        <Text color="blackAlpha.800" fontSize="14px"> {`${e.views.views} views`}</Text>
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
