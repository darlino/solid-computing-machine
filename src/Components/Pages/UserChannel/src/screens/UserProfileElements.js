import React, { useState } from "react";
import styled, { css } from "styled-components";
import {Box,HStack,Wrap,WrapItem,Text, Heading,Divider} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,VStack } from "@chakra-ui/react"
import logo from "../assets/images/59-595914_facebook-cover-photos-retro.jpg"
import luffy from "../assets/images/luffy-lavez-vous-les-mains.jpg"
import thumb from "../assets/images/nba-live-mobile-17651-2.jpg"
import todo from "../assets/images/todo.jpg"
import {Link} from "react-router-dom"
import { BiUpload } from 'react-icons/bi'
function Profile(props) {

  const [haveSubscribe,setHaveSubscribe] = useState(false)
  const [subscribers,setSubccribers] = useState(0)

  const dummyData = [{
    videosTitle: "Me and curt feel the same ...",
    videosViews: "10k",
    poster: todo,
    videoDuration: "5 : 30"
  },
  {
    videosTitle: "Theres no way i can save you caus i need to be save tooo ...",
    videosViews: "13M",
    poster: thumb,
    videoDuration : "3 : 40"
  },
  {
    videosTitle: "Let's talk about liyeplimall ...",
    videosViews: "120Md",
    poster: 'https://media-exp1.licdn.com/dms/image/C561BAQEkqkBusHBAjQ/company-background_10000/0/1611807516039?e=2159024400&v=beta&t=Kr4S7ytvqT9xDIFP78qCfJsZC8dl9wDWPD-Q-0ixNLk',
    videoDuration : "12 : 40"
  },
]

  const videos = (videoTitle,videoViews,poster,videoDuration) =>{
    return (
      <Rect4Stack>
      <Rect4>
        <LoremIpsum3 >{videoTitle}</LoremIpsum3>
        <LoremIpsum4>{`${videoViews} views`}</LoremIpsum4>
      </Rect4>
      
      <WrapItem>
      <Image3 img={poster}>
        <Rect5Stack>
          <Rect5></Rect5>
          <LoremIpsum2>{videoDuration}</LoremIpsum2>
        </Rect5Stack>
      </Image3>
      </WrapItem>
      
    </Rect4Stack>
    
    )
  }

  return (
    <Box w="100vh" p={20} mt={4}>
      <RectStackStack>
        <RectStack>
          <Rect>
            <Image
              src={logo}
            ></Image>
          </Rect>
          <Image2
            src={luffy}
          ></Image2>
        </RectStack>
        <HStack>
        <HStack spacing="40px" width="500px" ml="800px">
        <Rect2 onClick={ () => setHaveSubscribe(!haveSubscribe)}>
          <Subscribe>{haveSubscribe ? "Unsubscribe" : "Subscribe"}</Subscribe>
        </Rect2>
        
          
        </HStack>
          <Edit to="/edit-profile">
            <Subscribe> <Text> Edit Profile</Text> </Subscribe>
          </Edit>
        </HStack> 
        
        
        <LuffyDeWano>Luffy De Wano</LuffyDeWano>
        
        <LoremIpsum>{`${subscribers} Subcribers`}</LoremIpsum>
      </RectStackStack>
      <Rect3>
          <Tabs p={5} outline="none">
            <TabList>
              <Tab> <Videos>Videos</Videos></Tab>
              <Tab> <Videos>Bio</Videos></Tab>
            </TabList>
          
        <TabPanels p={3}>
          <TabPanel m={3}>
              <Wrap>{videos("Darlino","8k",thumb,"4 : 20")}</Wrap>
          </TabPanel>
          <TabPanel>
            <HStack w="90%" h="auto" p={5} spacing={4}>
              <Text> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</Text>
            </HStack>
            
          </TabPanel>
      
        </TabPanels>
        </Tabs>
      </Rect3>
    </Box>
  );
}
const Edit = styled(Link)`
  top: 355px;
  left: 950px;
  width: 177px;
  height: 42px;
  position: absolute;
  background-color: rgba(5,61,126,1);
  border-radius: 1px;
  flex-direction: column;
  border-radius:2px;
  display: flex;
  display:flex;
  justify-content: space-between;
`
const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 1478px;
  height: 333px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  
`;

const Image2 = styled.img`
  top: 247px;
  left: 38px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: cover;
`;

const RectStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1478px;
  height: 447px;
  position: absolute;
`;

const Rect2 = styled.button`
  top: 355px;
  left: 1201px;
  width: 177px;
  height: 42px;
  position: absolute;
  background-color: rgba(5,61,126,1);
  border-radius: 1px;
  flex-direction: column;
  border-radius:2px;
  display: flex;
`;

const Subscribe = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 35px;
  width: 138px;
  text-align: center;
  font-size: 18px;
  margin-top: 7px;
  margin-left: 19px;
`;

const LuffyDeWano = styled.span`
  font-family: Alata;
  top: 347px;
  left: 263px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  height: 44px;
  width: 314px;
  font-size: 20px;
`;

const LoremIpsum = styled.span`
  font-family: Alata;
  top: 391px;
  left: 263px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 36px;
  width: 321px;
`;

const RectStackStack = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Rect3 = styled.div`
  width: 1340px;
  height: 514px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  margin-top: 31px;
  margin-left: 38px;
  position: absolute;
  top:500px
`;

const Videos = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 30px;
  width: 100%;
  font-size: 20px;
  padding-bottom:10px;
  outline:none;
  border:none
`

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 376px;
  height: 286px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum3 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: auto;
  width: auto;
  font-size: 18px;
  margin-top: 206px;
  margin-left: 6px;
  text-overflow: ellipsis;
`;

const LoremIpsum4 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,6,6,1);
  height: 36px;
  width: 263px;
  font-size: 16px;
  margin-left: 6px;
`;

const Image3 = styled.div`
  top: 0px;
  left: 6px;
  width: 374px;
  height: 200px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${props => props.img});
  background-size: cover;
  transition:transform .2s;
  &:hover{
    transform: scale(1.05)
  }
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 73px;
  height: 29px;
  position: absolute;
  background-color: rgba(0,0,0,1);
  opacity: 0.63;
`;

const LoremIpsum2 = styled.span`
  font-family: Alata;
  top: 2px;
  left: 19px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 23px;
  width: 69px;
`;

const Rect5Stack = styled.div`
  width: 88px;
  height: 29px;
  margin-top: 160px;
  margin-left: 264px;
  position: relative;
`;

const Rect4Stack = styled.div`
  width: 380px;
  height: 286px;
  margin-top: 10px;
  margin-left: 27px;
  position: relative;
`;

export default Profile;
